import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { JwtService } from './jwt.service';
import { SessionService } from './session.service';
import {
  AuthResponse,
  InfluencerLoginInput,
  InfluencerRegisterInput,
} from './auth.dto';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/---generated---';
import { ResendService } from 'src/resend/resend.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DbService,
    private readonly jwtService: JwtService,
    private readonly sessionService: SessionService,
    private readonly resendService: ResendService,
  ) {}

  async influencerLogin(input: InfluencerLoginInput): Promise<AuthResponse> {
    const influencer = await this.db.influencer.findUnique({
      where: { email: input.email },
    });

    if (!influencer) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      input.password,
      influencer.password,
    );
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = this.jwtService.generateJwt({
      entityId: influencer.id,
      entityRole: Role.INFLUENCER,
    });

    await this.sessionService.createSession(
      token,
      influencer.id,
      Role.INFLUENCER,
    );

    return { isNew: false, token };
  }

  async influencerRegister(
    input: InfluencerRegisterInput,
  ): Promise<AuthResponse> {
    const hashedPassword = await bcrypt.hash(input.password, 10);

    const influencer = await this.db.influencer.create({
      data: {
        ...input,
        password: hashedPassword,
      },
    });

    const token = this.jwtService.generateJwt({
      entityId: influencer.id,
      entityRole: Role.INFLUENCER,
    });

    await this.sessionService.createSession(
      token,
      influencer.id,
      Role.INFLUENCER,
    );

    await this.resendService.sendRegistrationEmail({
      to: influencer.email,
      name: influencer.name ?? influencer.username,
    });

    return { isNew: true, token };
  }
}

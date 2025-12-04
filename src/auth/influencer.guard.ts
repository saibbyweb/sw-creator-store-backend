import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Role } from 'src/---generated---';
import { BaseAuthGuard } from './auth.guard';
import { JwtPayload, JwtService } from './jwt.service';
import { SessionService } from './session.service';

@Injectable()
export class InfluencerGuard extends BaseAuthGuard {
  constructor(jwtService: JwtService, sessionService: SessionService) {
    super(jwtService, sessionService);
  }

  protected validateRole(payload: JwtPayload): boolean {
    if (payload.entityRole !== Role.INFLUENCER) {
      throw new UnauthorizedException('Not an influencer');
    }
    return true;
  }
}

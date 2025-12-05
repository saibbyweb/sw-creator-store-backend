import { Injectable, Logger } from '@nestjs/common';
import { Influencer } from 'src/---generated---';
import { DbService } from 'src/db/db.service';
import {
  CreateInfluencerInput,
  UpdateInfluencerPasswordInput,
} from './influencer.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class InfluencerService {
  private readonly logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger(InfluencerService.name);
  }

  async influencers(): Promise<Influencer[]> {
    return this.db.influencer.findMany();
  }

  async loggedInInfluencer(influencerId: string): Promise<Influencer> {
    try {
      const influencer = await this.db.influencer.findUnique({
        where: { id: influencerId },
        include: {
          stores: false,
        },
      });

      if (!influencer) {
        throw new Error('Influencer Not Found');
      }

      return influencer;
    } catch {
      this.logger.error('Failed to get influencer');
      throw new Error('Failed to get influencer');
    }
  }

  async createInfluencer(input: CreateInfluencerInput): Promise<Influencer> {
    try {
      const hashedPassword = await bcrypt.hash(input.password, 10);

      const influencer = await this.db.influencer.create({
        data: {
          ...input,
          password: hashedPassword,
        },
      });

      return influencer;
    } catch {
      this.logger.error('Failed to create influencer');
      throw new Error('Failed to create influencer');
    }
  }

  async updateInfluencerPassword(
    input: UpdateInfluencerPasswordInput,
    influencerId: string,
  ) {
    try {
      const influencer = await this.db.influencer.findUnique({
        where: {
          id: influencerId,
        },
      });

      if (!influencer) {
        throw new Error('Influencer not found');
      }

      const isPasswordValid = await bcrypt.compare(
        input.password,
        influencer.password,
      );

      if (!isPasswordValid) {
        throw new Error('Invalid Credentials');
      }

      const hashedNewPassword = await bcrypt.hash(input.newPassword, 10);
      const updatedInfluencer = await this.db.influencer.update({
        where: { id: influencer.id },
        data: { password: hashedNewPassword },
      });

      return updatedInfluencer;
    } catch {
      this.logger.error('Failed to update influencer password');
      throw new Error('Failed to update influencer password');
    }
  }
}

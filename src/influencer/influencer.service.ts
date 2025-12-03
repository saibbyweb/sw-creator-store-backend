import { Injectable, Logger } from '@nestjs/common';
import { Influencer } from 'src/---generated---';
import { DbService } from 'src/db/db.service';
import { StripeService } from 'src/stripe/stripe.service';
import {
  CreateInfluencerInput,
  UpdateInfluencerPasswordInput,
} from './influencer.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class InfluencerService {
  private readonly logger: Logger;
  constructor(
    private readonly db: DbService,
    private readonly stripeService: StripeService,
  ) {
    this.logger = new Logger(InfluencerService.name);
  }

  async createInfluencer(input: CreateInfluencerInput): Promise<Influencer> {
    try {
      const influencerCreateTransaction = await this.db.$transaction(
        async (tx) => {
          const hashedPassword = await bcrypt.hash(input.password, 10);

          const influencer = await tx.influencer.create({
            data: {
              ...input,
              password: hashedPassword,
            },
          });

          const stripeConnectAccount =
            await this.stripeService.createStripeConnectAccount({
              influencerId: influencer.id,
            });

          const updatedInfluencer = await tx.influencer.update({
            where: { id: influencer.id },
            data: {
              stripeAccountId: stripeConnectAccount.stripeAccountId,
            },
          });

          return updatedInfluencer;
        },
      );

      return influencerCreateTransaction;
    } catch (error) {
      this.logger.error('Failed to create influencer');
      throw new Error('Failed to create influencer');
    }
  }

  async updateInfluencerPassword(input: UpdateInfluencerPasswordInput) {
    try {
      const influencer = await this.db.influencer.findUnique({
        where: {
          id: input.influencerId,
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
        throw new Error('Invalid password');
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

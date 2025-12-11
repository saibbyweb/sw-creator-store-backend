import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import {
  AttachPaymentMethodToInfluencerInput,
  DetachPaymentMethodFromInfluencerInput,
  SetDefaultPaymentMethodInput,
} from './payment-method.dto';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class PaymentMethodService {
  private readonly logger: Logger;
  constructor(
    private readonly db: DbService,
    private readonly stripeService: StripeService,
  ) {
    this.logger = new Logger(PaymentMethodService.name);
  }

  async influencerPaymentMethods(influencerId: string) {
    try {
      const paymentMethods = await this.db.influencerPaymentMethod.findMany({
        where: {
          influencerId,
          deletedAt: {
            isSet: false,
          },
        },
      });
      return paymentMethods;
    } catch {
      this.logger.error('Failed to get payment methods');
      throw new Error('Failed to get payment methods');
    }
  }

  async attachPaymentMethodToInfluencer(
    input: AttachPaymentMethodToInfluencerInput,
    influencerId: string,
  ) {
    try {
      const paymentMethod = await this.db.influencerPaymentMethod.create({
        data: {
          ...input,
          influencerId,
        },
      });
      return paymentMethod;
    } catch {
      this.logger.error('Failed to attach payment method to influencer');
      throw new Error('Failed to attach payment method to influencer');
    }
  }

  async setDefaultPaymentMethod(
    input: SetDefaultPaymentMethodInput,
    influencerId: string,
  ) {
    try {
      await this.db.influencerPaymentMethod.updateMany({
        where: { influencerId },
        data: { default: false },
      });

      const paymentMethod = await this.db.influencerPaymentMethod.update({
        where: { id: input.paymentMethodId, influencerId },
        data: { default: true },
      });

      return paymentMethod;
    } catch {
      this.logger.error('Failed to set default payment method');
      throw new Error('Failed to set default payment method');
    }
  }

  async detachPaymentMethodFromInfluencer(
    input: DetachPaymentMethodFromInfluencerInput,
    influencerId: string,
  ) {
    try {
      const paymentMethod = await this.db.influencerPaymentMethod.update({
        where: { id: input.paymentMethodId, influencerId },
        data: { deletedAt: new Date(), default: false },
      });

      await this.stripeService.detachPaymentMethodFromStripe(
        paymentMethod.stripePaymentMethodId,
      );
      return paymentMethod;
    } catch (error) {
      console.log(error);
      this.logger.error('Failed to detach payment method from influencer');
      throw new Error('Failed to detach payment method from influencer');
    }
  }
}

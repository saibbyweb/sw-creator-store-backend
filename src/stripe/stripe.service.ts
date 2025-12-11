import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import Stripe from 'stripe';
import {
  CheckStripeOnboardingStatusInput,
  CreateStripeConnectAccountInput,
  GenerateStripeOnboardingLinkInput,
  GenerateStripeOnboardingLinkResponse,
} from './stripe.dto';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  private readonly stripeSecretKey: string;
  private readonly logger: Logger;
  private readonly frontendUrl: string;

  constructor(private readonly db: DbService) {
    this.logger = new Logger(StripeService.name);
    this.stripeSecretKey = process.env.STRIPE_SECRET_KEY!;
    if (!this.stripeSecretKey) {
      throw new Error('Stripe is not configured!');
    }
    this.stripe = new Stripe(this.stripeSecretKey, {
      apiVersion: '2025-11-17.clover',
    });
    // this.frontendUrl = process.env.FRONTEND_URL!;
    this.frontendUrl = 'https://saibbyweb.com';
  }

  async createStripeConnectAccount(input: CreateStripeConnectAccountInput) {
    try {
      const stripeConnectAccount = await this.stripe.accounts.create({
        type: 'express',
        country: input.country,
        email: input.email,
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
        business_type: 'individual',
        business_profile: {
          url: `https://${this.frontendUrl}/${input.username}`,
        },
      });

      return {
        stripeAccountId: stripeConnectAccount.id,
        stripeAccountType: stripeConnectAccount.type,
      };
    } catch {
      this.logger.error('Failed to create Stripe connect account');
      throw new Error('Failed to create Stripe connect account');
    }
  }

  async generateStripeOnboardingLink(
    input: GenerateStripeOnboardingLinkInput,
  ): Promise<GenerateStripeOnboardingLinkResponse> {
    try {
      const influencer = await this.db.influencer.findUnique({
        where: {
          id: input.influencerId,
        },
      });

      if (!influencer || !influencer.stripeAccountId) {
        throw new Error(
          'Influencer not found or does not have a Stripe account',
        );
      }

      const stripeConnectAccountLink = await this.stripe.accountLinks.create({
        account: influencer.stripeAccountId,
        refresh_url: `https://${this.frontendUrl}/stripe/connect/refresh`,
        return_url: `https://${this.frontendUrl}/stripe/connect/return`,
        type: 'account_onboarding',
      });

      return {
        onboardingLink: stripeConnectAccountLink.url,
      };
    } catch {
      this.logger.error('Failed to generate Stripe onboarding link');
      throw new Error('Failed to generate Stripe onboarding link');
    }
  }

  async checkStripeOnboardingStatus(input: CheckStripeOnboardingStatusInput) {
    try {
      const influencer = await this.db.influencer.findUnique({
        where: {
          id: input.influencerId,
        },
      });

      if (!influencer || !influencer.stripeAccountId) {
        throw new Error(
          'Influencer not found or does not have a Stripe account',
        );
      }

      const account = await this.stripe.accounts.retrieve(
        influencer.stripeAccountId,
      );
      const updatedInfluencer = await this.db.influencer.update({
        where: { id: input.influencerId },
        data: {
          chargesEnabled: account.charges_enabled,
          payoutsEnabled: account.payouts_enabled,
          detailsSubmitted: account.details_submitted,
          stripeOnboardingComplete:
            account.charges_enabled && account.payouts_enabled,
        },
      });

      return updatedInfluencer;
    } catch {
      this.logger.error('Failed to check Stripe onboarding status');
      throw new Error('Failed to check Stripe onboarding status');
    }
  }

  async detachPaymentMethodFromStripe(stripePaymentMethodId: string) {
    try {
      console.log(stripePaymentMethodId);
      await this.stripe.paymentMethods.detach(stripePaymentMethodId);
      return true;
    } catch (error) {
      console.log(error);
      this.logger.error('Failed to detach payment method from Stripe');
      throw new Error('Failed to detach payment method from Stripe');
    }
  }
}

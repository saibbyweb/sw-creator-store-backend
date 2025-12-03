import { Module } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { InfluencerResolver } from './influencer.resolver';
import { StripeModule } from 'src/stripe/stripe.module';

@Module({
  imports: [StripeModule],
  providers: [InfluencerService, InfluencerResolver],
  exports: [InfluencerService],
})
export class InfluencerModule {}

import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { PaymentMethodService } from './payment-method.service';
import { UseGuards } from '@nestjs/common';
import { CurrentEntity, InfluencerGuard } from 'src/auth';
import {
  AttachPaymentMethodToInfluencerInput,
  DetachPaymentMethodFromInfluencerInput,
  SetDefaultPaymentMethodInput,
} from './payment-method.dto';
import { InfluencerPaymentMethod } from 'src/---generated---';

@Resolver()
export class PaymentMethodResolver {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Query(() => [InfluencerPaymentMethod])
  @UseGuards(InfluencerGuard)
  async influencerPaymentMethods(@CurrentEntity() entity: any) {
    return this.paymentMethodService.influencerPaymentMethods(entity.entityId);
  }

  @Mutation(() => InfluencerPaymentMethod)
  @UseGuards(InfluencerGuard)
  async attachPaymentMethodToInfluencer(
    @Args('input') input: AttachPaymentMethodToInfluencerInput,
    @CurrentEntity() entity: any,
  ) {
    return this.paymentMethodService.attachPaymentMethodToInfluencer(
      input,
      entity.entityId,
    );
  }

  @Mutation(() => InfluencerPaymentMethod)
  @UseGuards(InfluencerGuard)
  async setDefaultPaymentMethod(
    @Args('input') input: SetDefaultPaymentMethodInput,
    @CurrentEntity() entity: any,
  ) {
    return this.paymentMethodService.setDefaultPaymentMethod(
      input,
      entity.entityId,
    );
  }

  @Mutation(() => InfluencerPaymentMethod)
  @UseGuards(InfluencerGuard)
  async detachPaymentMethodFromInfluencer(
    @Args('input') input: DetachPaymentMethodFromInfluencerInput,
    @CurrentEntity() entity: any,
  ) {
    return this.paymentMethodService.detachPaymentMethodFromInfluencer(
      input,
      entity.entityId,
    );
  }
}

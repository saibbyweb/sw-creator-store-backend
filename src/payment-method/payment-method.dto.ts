import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AttachPaymentMethodToInfluencerInput {
  @Field(() => String)
  stripePaymentMethodId: string;

  @Field(() => String, { nullable: true })
  last4?: string;

  @Field(() => String, { nullable: true })
  brand?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => Int, { nullable: true })
  expMonth?: number;

  @Field(() => Int, { nullable: true })
  expYear?: number;

  @Field(() => String, { nullable: true })
  funding?: string;
}

@InputType()
export class SetDefaultPaymentMethodInput {
  @Field(() => String)
  paymentMethodId: string;
}

@InputType()
export class DetachPaymentMethodFromInfluencerInput {
  @Field(() => String)
  paymentMethodId: string;
}

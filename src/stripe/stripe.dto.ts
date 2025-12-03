import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateStripeConnectAccountInput {
  @Field(() => String)
  influencerId: string;
}

@InputType()
export class GenerateStripeOnboardingLinkInput {
  @Field(() => String)
  influencerId: string;
}

@ObjectType()
export class GenerateStripeOnboardingLinkResponse {
  @Field(() => String)
  onboardingLink: string;
}

@InputType()
export class CheckStripeOnboardingStatusInput {
  @Field(() => String)
  influencerId: string;
}

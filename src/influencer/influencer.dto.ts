import { Field, InputType } from '@nestjs/graphql';
import { Address, AddressCreateInput } from 'src/---generated---';

@InputType()
export class CreateInfluencerInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => AddressCreateInput)
  address: Address;

  @Field(() => String)
  countryCode: string;

  @Field(() => String)
  phoneNumber: string;
}

@InputType()
export class UpdateInfluencerPasswordInput {
  @Field(() => String)
  influencerId: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  newPassword: string;
}

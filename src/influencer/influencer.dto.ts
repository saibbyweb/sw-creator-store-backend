import { Field, InputType } from '@nestjs/graphql';
import {
  Address,
  AddressCreateInput,
  SocialLink,
  SocialLinkCreateInput,
} from 'src/---generated---';

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

  @Field(() => [SocialLinkCreateInput])
  socialLinks: SocialLink[];

  @Field(() => String, { nullable: true })
  displayName?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => String, { nullable: true })
  profilePicture?: string;
}

@InputType()
export class UpdateInfluencerPasswordInput {
  @Field(() => String)
  password: string;

  @Field(() => String)
  newPassword: string;
}

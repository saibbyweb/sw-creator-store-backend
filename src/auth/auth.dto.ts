import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CreateInfluencerInput } from 'src/influencer/influencer.dto';

@InputType()
export class InfluencerLoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class InfluencerRegisterInput extends CreateInfluencerInput {}

@ObjectType()
export class AuthResponse {
  @Field(() => Boolean)
  isNew: boolean;

  @Field(() => String)
  token: string;
}

import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class ConnectZoomIntegrationInput {
  @Field(() => String)
  code: string;
}

@ObjectType()
export class InitiateZoomIntegrationResponse {
  @Field(() => String)
  authUrl: string;
}

@ObjectType()
export class ConnectZoomIntegrationResponse {
  @Field(() => Boolean)
  success: boolean;
}

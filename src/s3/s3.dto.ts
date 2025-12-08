import { Field, InputType, ObjectType } from '@nestjs/graphql';

export interface ContentTypeMap {
  [key: string]: string;
}

@InputType()
export class GenerateSignedUploadUrlInput {
  @Field(() => String)
  extension: string;

  @Field(() => Number, { nullable: true, defaultValue: 3600 })
  expiresIn?: number;
}

@ObjectType()
export class GenerateSignedUploadUrlResponse {
  @Field(() => String)
  key: string;

  @Field(() => String)
  uploadUrl: string;
}

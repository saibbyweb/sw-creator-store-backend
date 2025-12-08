import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Media, MediaPrivacy, MediaType } from 'src/---generated---';

@InputType()
export class CreateMediaInput {
  @Field(() => String)
  key: string;

  @Field(() => MediaType)
  type: MediaType;

  @Field(() => MediaPrivacy)
  privacy: MediaPrivacy;
}

@InputType()
export class FetchMediaInput {
  @Field(() => String)
  mediaId: string;

  @Field(() => MediaPrivacy, { nullable: true })
  privacy?: MediaPrivacy;
}

@InputType()
export class FetchAllMediaInput {
  @Field(() => MediaPrivacy, { nullable: true })
  privacy?: MediaPrivacy;
}

@ObjectType()
export class FetchMediaResponse {
  @Field(() => String)
  accessUrl: string;
}

@ObjectType()
export class MediaWithAccessUrl extends Media {
  @Field(() => String)
  temporaryAccessUrl: string;
}

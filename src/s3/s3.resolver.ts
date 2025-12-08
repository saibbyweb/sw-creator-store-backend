import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { S3Service } from './s3.service';
import {
  GenerateSignedUploadUrlInput,
  GenerateSignedUploadUrlResponse,
} from './s3.dto';

@Resolver()
export class S3Resolver {
  constructor(private readonly s3Service: S3Service) {}

  @Mutation(() => GenerateSignedUploadUrlResponse)
  async generateSignedUploadUrl(
    @Args('input') input: GenerateSignedUploadUrlInput,
  ) {
    return this.s3Service.generateSignedUploadUrl(input);
  }
}

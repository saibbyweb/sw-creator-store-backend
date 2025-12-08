import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MediaService } from './media.service';
import {
  CreateMediaInput,
  FetchAllMediaInput,
  FetchMediaInput,
  FetchMediaResponse,
  MediaWithAccessUrl,
} from './media.dto';
import { UseGuards } from '@nestjs/common';
import { CurrentEntity, InfluencerGuard } from 'src/auth';
import { Media } from 'src/---generated---';

@Resolver()
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Mutation(() => Media)
  @UseGuards(InfluencerGuard)
  async createMedia(
    @Args('input') input: CreateMediaInput,
    @CurrentEntity() entity: any,
  ) {
    return this.mediaService.createMedia(input, entity.entityId);
  }

  @Query(() => FetchMediaResponse)
  @UseGuards(InfluencerGuard)
  async fetchMedia(
    @Args('input') input: FetchMediaInput,
    @CurrentEntity() entity: any,
  ) {
    return this.mediaService.fetchMedia(input, entity.entityId);
  }

  @Query(() => [MediaWithAccessUrl])
  @UseGuards(InfluencerGuard)
  async fetchAllMedia(
    @CurrentEntity() entity: any,
    @Args('input', { nullable: true }) input?: FetchAllMediaInput,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ) {
    return this.mediaService.fetchAllMedia(entity.entityId, input, skip, take);
  }
}

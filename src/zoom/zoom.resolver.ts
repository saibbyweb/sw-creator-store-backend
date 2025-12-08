import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ZoomAuthService } from './zoom-auth.service';
import { CurrentEntity, InfluencerGuard } from 'src/auth';
import { UseGuards } from '@nestjs/common';
import {
  ConnectZoomIntegrationInput,
  ConnectZoomIntegrationResponse,
  InitiateZoomIntegrationResponse,
} from './zoom.dto';

@Resolver()
export class ZoomMeetingResolver {
  constructor(private readonly zoomAuthService: ZoomAuthService) {}

  @Query(() => InitiateZoomIntegrationResponse)
  async initiateZoomIntegration() {
    return this.zoomAuthService.getAuthUrl();
  }

  @Mutation(() => ConnectZoomIntegrationResponse)
  @UseGuards(InfluencerGuard)
  async connectZoomIntegration(
    @Args('input') input: ConnectZoomIntegrationInput,
    @CurrentEntity() entity: any,
  ) {
    return this.zoomAuthService.handleCallback(input, entity.entityId);
  }
}

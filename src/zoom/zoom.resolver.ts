import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ZoomAuthService } from './zoom-auth.service';
import { CurrentEntity, InfluencerGuard } from 'src/auth';
import { UseGuards } from '@nestjs/common';
import {
  ConnectZoomIntegrationInput,
  ConnectZoomIntegrationResponse,
  CreateMeetingInput,
  CreateMeetingResponse,
  InitiateZoomIntegrationResponse,
  ZoomMeeting,
} from './zoom.dto';
import { ZoomMeetingService } from './zoom-meeting.service';

@Resolver()
export class ZoomMeetingResolver {
  constructor(
    private readonly zoomAuthService: ZoomAuthService,
    private readonly zoomMeetingService: ZoomMeetingService,
  ) {}

  @Query(() => InitiateZoomIntegrationResponse)
  async initiateZoomIntegration() {
    return this.zoomAuthService.initiateZoomIntegration();
  }

  @Mutation(() => CreateMeetingResponse)
  @UseGuards(InfluencerGuard)
  async createMeeting(
    @CurrentEntity() entity: any,
    @Args('input') input: CreateMeetingInput,
  ) {
    return this.zoomMeetingService.createMeeting(entity.entityId, input);
  }

  @Mutation(() => ConnectZoomIntegrationResponse)
  @UseGuards(InfluencerGuard)
  async connectZoomIntegration(
    @Args('input') input: ConnectZoomIntegrationInput,
    @CurrentEntity() entity: any,
  ) {
    return this.zoomAuthService.handleCallback(input, entity.entityId);
  }

  @Query(() => [ZoomMeeting])
  @UseGuards(InfluencerGuard)
  async influencerMeetings(@CurrentEntity() entity: any) {
    return this.zoomMeetingService.listMeetings(entity.entityId);
  }

  @Mutation(() => Boolean)
  @UseGuards(InfluencerGuard)
  async disconnectZoomIntegration(@CurrentEntity() entity: any) {
    return this.zoomAuthService.disconnectZoom(entity.entityId);
  }
}

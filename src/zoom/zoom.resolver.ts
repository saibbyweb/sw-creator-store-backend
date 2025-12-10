import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ZoomAuthService } from './zoom-auth.service';
import { CurrentEntity, InfluencerGuard } from 'src/auth';
import { UseGuards } from '@nestjs/common';
import {
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

  @Mutation(() => InitiateZoomIntegrationResponse)
  @UseGuards(InfluencerGuard)
  async initiateZoomIntegration(@CurrentEntity() entity: any) {
    return this.zoomAuthService.initiateZoomIntegration(entity.entityId);
  }

  @Mutation(() => CreateMeetingResponse)
  @UseGuards(InfluencerGuard)
  async createMeeting(
    @CurrentEntity() entity: any,
    @Args('input') input: CreateMeetingInput,
  ) {
    return this.zoomMeetingService.createMeeting(entity.entityId, input);
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

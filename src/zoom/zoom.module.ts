import { Module } from '@nestjs/common';
import { ZoomMeetingService } from './zoom-meeting.service';
import { ZoomMeetingResolver } from './zoom.resolver';
import { ZoomAuthService } from './zoom-auth.service';

@Module({
  providers: [ZoomMeetingService, ZoomAuthService, ZoomMeetingResolver],
  exports: [ZoomMeetingService, ZoomAuthService],
})
export class ZoomModule {}

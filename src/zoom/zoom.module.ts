import { Module } from '@nestjs/common';
import { ZoomMeetingService } from './zoom-meeting.service';
import { ZoomMeetingResolver } from './zoom.resolver';

@Module({
  providers: [ZoomMeetingService, ZoomMeetingResolver],
  exports: [ZoomMeetingService],
})
export class ZoomModule {}

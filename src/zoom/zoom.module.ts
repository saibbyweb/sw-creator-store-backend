import { Module } from '@nestjs/common';
import { ZoomMeetingService } from './zoom-meeting.service';
import { ZoomMeetingResolver } from './zoom.resolver';
import { ZoomAuthService } from './zoom-auth.service';
import { ZoomController } from './zoom.controller';

@Module({
  providers: [ZoomMeetingService, ZoomAuthService, ZoomMeetingResolver],
  exports: [ZoomMeetingService, ZoomAuthService],
  controllers: [ZoomController],
})
export class ZoomModule {}

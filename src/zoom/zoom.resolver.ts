import { Resolver } from '@nestjs/graphql';
import { ZoomMeetingService } from './zoom-meeting.service';

@Resolver()
export class ZoomMeetingResolver {
  constructor(private readonly zS: ZoomMeetingService) {}
}

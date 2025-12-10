import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GoogleAuthService } from './google-auth.service';
import { CalendarService } from './google-calendar.service';
import { CurrentEntity } from 'src/auth/entity.decorator';
import { InfluencerGuard } from 'src/auth';
import { CalendarEvent, CreateEventInput } from './google-calendar.dto';

@Resolver()
export class CalendarResolver {
  constructor(
    private googleAuth: GoogleAuthService,
    private calendar: CalendarService,
  ) {}

  @Mutation(() => String)
  @UseGuards(InfluencerGuard)
  initiateGoogleCalendarIntegration(@CurrentEntity() entity: any) {
    return this.googleAuth.initiateGoogleCalendarIntegration(entity.entityId);
  }

  @Query(() => [CalendarEvent])
  @UseGuards(InfluencerGuard)
  async getCalendarEvents(@CurrentEntity() entity: any) {
    return this.calendar.listEvents(entity.entityId);
  }

  @Mutation(() => CalendarEvent)
  @UseGuards(InfluencerGuard)
  async createCalendarEvent(
    @Args('input') input: CreateEventInput,
    @CurrentEntity() entity: any,
  ) {
    return this.calendar.createEvent(entity.entityId, input);
  }
}

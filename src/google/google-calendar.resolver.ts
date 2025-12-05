import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GoogleAuthService } from './google-auth.service';
import { CalendarService } from './google-calendar.service';
import { CurrentEntity } from 'src/auth/entity.decorator';
import { InfluencerGuard } from 'src/auth';
import {
  CalendarEvent,
  ConnectGoogleCalendarInput,
  CreateEventInput,
} from './google-calendar.dto';

@Resolver()
export class CalendarResolver {
  constructor(
    private googleAuth: GoogleAuthService,
    private calendar: CalendarService,
  ) {}

  @Query(() => String)
  @UseGuards(InfluencerGuard)
  getGoogleAuthUrl() {
    return this.googleAuth.getAuthUrl();
  }

  @Mutation(() => Boolean)
  @UseGuards(InfluencerGuard)
  async connectGoogleCalendar(
    @Args('input') input: ConnectGoogleCalendarInput,
    @CurrentEntity() entity: any,
  ) {
    await this.googleAuth.handleCallback(input, entity.entityId);
    return true;
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

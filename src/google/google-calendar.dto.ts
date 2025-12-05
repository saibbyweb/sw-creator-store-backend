import { ObjectType, Field, InputType } from '@nestjs/graphql';

// Define EventPerson FIRST (before CalendarEvent uses it)
@ObjectType()
export class EventPerson {
  @Field(() => String)
  email: string;

  @Field(() => Boolean, { nullable: true })
  self?: boolean;
}

// Define EventDateTime SECOND (before CalendarEvent uses it)
@ObjectType()
export class EventDateTime {
  @Field(() => String, { nullable: true })
  dateTime?: string;

  @Field(() => String, { nullable: true })
  date?: string;

  @Field(() => String, { nullable: true })
  timeZone?: string;
}

// Now CalendarEvent can safely reference EventPerson and EventDateTime
@ObjectType()
export class CalendarEvent {
  @Field(() => String)
  id: string;

  @Field(() => String)
  summary: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String)
  status: string;

  @Field(() => String)
  htmlLink: string;

  @Field(() => String)
  created: string;

  @Field(() => String)
  updated: string;

  @Field(() => EventPerson)
  creator: EventPerson;

  @Field(() => EventPerson)
  organizer: EventPerson;

  @Field(() => EventDateTime, { nullable: true })
  start: EventDateTime;

  @Field(() => EventDateTime, { nullable: true })
  end: EventDateTime;

  @Field(() => String)
  eventType: string;

  @Field(() => String, { nullable: true })
  iCalUID?: string;
}

@InputType()
export class CreateEventInput {
  @Field(() => String)
  summary: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String)
  startTime: string;

  @Field(() => String)
  endTime: string;

  @Field(() => String, { nullable: true })
  timeZone?: string;

  @Field(() => [String], { nullable: true })
  attendees?: string[];
}

@InputType()
export class ConnectGoogleCalendarInput {
  @Field(() => String)
  code: string;
}

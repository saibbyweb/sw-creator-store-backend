import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class ConnectZoomIntegrationInput {
  @Field(() => String)
  code: string;
}

@ObjectType()
export class InitiateZoomIntegrationResponse {
  @Field(() => String)
  authUrl: string;
}

@ObjectType()
export class ConnectZoomIntegrationResponse {
  @Field(() => Boolean)
  success: boolean;
}

@InputType()
export class CreateMeetingInput {
  @Field(() => String)
  topic: string;

  @Field(() => Int, { nullable: true, defaultValue: 2 })
  type?: number;

  @Field(() => String, { nullable: true })
  startTime?: string;

  @Field(() => Int, { nullable: true })
  duration?: number;

  @Field(() => String, { nullable: true })
  timezone?: string;

  @Field(() => String, { nullable: true })
  agenda?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  hostVideo?: boolean;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  participantVideo?: boolean;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  joinBeforeHost?: boolean;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  muteUponEntry?: boolean;
}

@ObjectType()
export class CreateMeetingResponse {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => String, { nullable: true })
  meetingId?: string;
}

@ObjectType()
export class ZoomMeeting {
  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  hostId?: string;

  @Field(() => String, { nullable: true })
  topic?: string;

  @Field(() => Number, { nullable: true })
  type?: number;

  @Field(() => String, { nullable: true })
  startTime?: string;

  @Field(() => Number, { nullable: true })
  duration?: number;

  @Field(() => String, { nullable: true })
  timezone?: string;

  @Field(() => String, { nullable: true })
  createdAt?: string;

  @Field(() => String, { nullable: true })
  joinUrl?: string;
}

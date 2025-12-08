import { Injectable, Logger } from '@nestjs/common';
import { ZoomAuthService } from './zoom-auth.service';
import axios from 'axios';
import {
  CreateMeetingInput,
  CreateMeetingResponse,
  ZoomMeeting,
} from './zoom.dto';

@Injectable()
export class ZoomMeetingService {
  private readonly logger: Logger;
  private readonly baseUrl: string;

  constructor(private zoomAuth: ZoomAuthService) {
    this.logger = new Logger(ZoomMeetingService.name);
    this.baseUrl = 'https://api.zoom.us/v2';
  }

  async createMeeting(
    influencerId: string,
    input: CreateMeetingInput,
  ): Promise<CreateMeetingResponse> {
    try {
      const accessToken = await this.zoomAuth.getAccessToken(influencerId);

      const payload = {
        topic: input.topic,
        type: input.type || 2,
        start_time: input.startTime,
        duration: input.duration,
        timezone: input.timezone || 'Asia/Kolkata',
        agenda: input.agenda,
        settings: {
          host_video: input.hostVideo ?? true,
          participant_video: input.participantVideo ?? true,
          join_before_host: input.joinBeforeHost ?? false,
          mute_upon_entry: input.muteUponEntry ?? true,
          waiting_room: true,
          audio: 'both',
        },
      };

      const response = await axios.post(
        `${this.baseUrl}/users/me/meetings`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return {
        success: true,
        meetingId: response?.data?.id,
      };
    } catch (error) {
      this.logger.error(
        'Create meeting error:',
        error.response?.data || error.message,
      );
      throw new Error('Failed to create Zoom meeting');
    }
  }

  async listMeetings(influencerId: string): Promise<ZoomMeeting[]> {
    try {
      const accessToken = await this.zoomAuth.getAccessToken(influencerId);

      const response = await axios.get(
        `${this.baseUrl}/users/me/meetings?type=scheduled`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      this.logger.log(
        `Listed ${response.data.meetings?.length || 0} meetings for influencer: ${influencerId}`,
      );
      const meetings = response.data.meetings || [];

      const formattedMeetings: ZoomMeeting[] = meetings.map((meeting: any) => ({
        uuid: meeting.uuid,
        id: meeting.id,
        hostId: meeting.hostId,
        topic: meeting.topic,
        type: meeting.type,
        startTime: meeting.startTime,
        duration: meeting.duration,
        timezone: meeting.timezone,
        createdAt: meeting.created_at,
        joinUrl: meeting.join_url,
      }));

      return formattedMeetings;
    } catch (error) {
      this.logger.error(
        'List meetings error:',
        error.response?.data || error.message,
      );
      console.log('error', error);
      throw new Error('Failed to list Zoom meetings');
    }
  }

  // async getMeeting(influencerId: string, meetingId: string) {
  //   try {
  //     const accessToken = await this.zoomAuth.getAccessToken(influencerId);

  //     const response = await axios.get(
  //       `${this.baseUrl}/meetings/${meetingId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       },
  //     );

  //     this.logger.log(
  //       `Retrieved meeting: ${meetingId} for influencer: ${influencerId}`,
  //     );
  //     return response.data;
  //   } catch (error) {
  //     this.logger.error(
  //       'Get meeting error:',
  //       error.response?.data || error.message,
  //     );
  //     throw new Error('Failed to get Zoom meeting');
  //   }
  // }

  // async updateMeeting(
  //   influencerId: string,
  //   meetingId: string,
  //   updateData: any,
  // ) {
  //   try {
  //     const accessToken = await this.zoomAuth.getAccessToken(influencerId);

  //     const payload = {
  //       topic: updateData.topic,
  //       start_time: updateData.startTime,
  //       duration: updateData.duration,
  //       timezone: updateData.timezone || 'Asia/Kolkata',
  //       agenda: updateData.agenda,
  //     };

  //     await axios.patch(`${this.baseUrl}/meetings/${meetingId}`, payload, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     this.logger.log(
  //       `Meeting updated: ${meetingId} for influencer: ${influencerId}`,
  //     );
  //     return { success: true };
  //   } catch (error) {
  //     this.logger.error(
  //       'Update meeting error:',
  //       error.response?.data || error.message,
  //     );
  //     throw new Error('Failed to update Zoom meeting');
  //   }
  // }

  // async deleteMeeting(influencerId: string, meetingId: string) {
  //   try {
  //     const accessToken = await this.zoomAuth.getAccessToken(influencerId);

  //     await axios.delete(`${this.baseUrl}/meetings/${meetingId}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     this.logger.log(
  //       `Meeting deleted: ${meetingId} for influencer: ${influencerId}`,
  //     );
  //     return true;
  //   } catch (error) {
  //     this.logger.error(
  //       'Delete meeting error:',
  //       error.response?.data || error.message,
  //     );
  //     throw new Error('Failed to delete Zoom meeting');
  //   }
  // }
}

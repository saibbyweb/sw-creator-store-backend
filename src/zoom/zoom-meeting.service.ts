import { Injectable, Logger } from '@nestjs/common';
import { ZoomAuthService } from './zoom-auth.service';
import axios from 'axios';

@Injectable()
export class ZoomMeetingService {
  private readonly logger: Logger;
  private readonly baseUrl: string;

  constructor(private zoomAuth: ZoomAuthService) {
    this.logger = new Logger(ZoomMeetingService.name);
    this.baseUrl = 'https://api.zoom.us/v2';
  }

  async createMeeting(influencerId: string, meetingData: any) {
    try {
      const accessToken = await this.zoomAuth.getAccessToken(influencerId);

      const payload = {
        topic: meetingData.topic,
        type: meetingData.type || 2, // 2=scheduled
        start_time: meetingData.startTime,
        duration: meetingData.duration,
        timezone: meetingData.timezone || 'Asia/Kolkata',
        agenda: meetingData.agenda,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: false,
          mute_upon_entry: true,
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

      this.logger.log(
        `Meeting created: ${response.data.id} for influencer: ${influencerId}`,
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        'Create meeting error:',
        error.response?.data || error.message,
      );
      throw new Error('Failed to create Zoom meeting');
    }
  }

  async listMeetings(influencerId: string) {
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
      return response.data.meetings || [];
    } catch (error) {
      this.logger.error(
        'List meetings error:',
        error.response?.data || error.message,
      );
      throw new Error('Failed to list Zoom meetings');
    }
  }

  async getMeeting(influencerId: string, meetingId: string) {
    try {
      const accessToken = await this.zoomAuth.getAccessToken(influencerId);

      const response = await axios.get(
        `${this.baseUrl}/meetings/${meetingId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      this.logger.log(
        `Retrieved meeting: ${meetingId} for influencer: ${influencerId}`,
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        'Get meeting error:',
        error.response?.data || error.message,
      );
      throw new Error('Failed to get Zoom meeting');
    }
  }

  async updateMeeting(
    influencerId: string,
    meetingId: string,
    updateData: any,
  ) {
    try {
      const accessToken = await this.zoomAuth.getAccessToken(influencerId);

      const payload = {
        topic: updateData.topic,
        start_time: updateData.startTime,
        duration: updateData.duration,
        timezone: updateData.timezone || 'Asia/Kolkata',
        agenda: updateData.agenda,
      };

      await axios.patch(`${this.baseUrl}/meetings/${meetingId}`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      this.logger.log(
        `Meeting updated: ${meetingId} for influencer: ${influencerId}`,
      );
      return { success: true };
    } catch (error) {
      this.logger.error(
        'Update meeting error:',
        error.response?.data || error.message,
      );
      throw new Error('Failed to update Zoom meeting');
    }
  }

  async deleteMeeting(influencerId: string, meetingId: string) {
    try {
      const accessToken = await this.zoomAuth.getAccessToken(influencerId);

      await axios.delete(`${this.baseUrl}/meetings/${meetingId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      this.logger.log(
        `Meeting deleted: ${meetingId} for influencer: ${influencerId}`,
      );
      return true;
    } catch (error) {
      this.logger.error(
        'Delete meeting error:',
        error.response?.data || error.message,
      );
      throw new Error('Failed to delete Zoom meeting');
    }
  }
}

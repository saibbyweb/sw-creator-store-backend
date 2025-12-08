import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import axios from 'axios';
import {
  ConnectZoomIntegrationInput,
  ConnectZoomIntegrationResponse,
  InitiateZoomIntegrationResponse,
} from './zoom.dto';

@Injectable()
export class ZoomAuthService {
  private readonly logger: Logger;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly redirectUri: string;

  constructor(private db: DbService) {
    this.logger = new Logger(ZoomAuthService.name);
    this.clientId = process.env.ZOOM_CLIENT_ID!;
    this.clientSecret = process.env.ZOOM_CLIENT_SECRET!;
    this.redirectUri = process.env.ZOOM_REDIRECT_URI!;

    if (!this.clientId || !this.clientSecret || !this.redirectUri) {
      this.logger.error('Zoom credentials are not set');
    }
  }

  async getAuthUrl(): Promise<InitiateZoomIntegrationResponse> {
    const baseUrl = 'https://zoom.us/oauth/authorize';
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope:
        'meeting:write:meeting meeting:read:meeting meeting:read:list_meetings user:read:user',
    });
    return { authUrl: `${baseUrl}?${params.toString()}` };
  }

  async handleCallback(
    input: ConnectZoomIntegrationInput,
    influencerId: string,
  ): Promise<ConnectZoomIntegrationResponse> {
    try {
      // Add error handling
      const tokenUrl = 'https://zoom.us/oauth/token';

      const params = new URLSearchParams({
        grant_type: 'authorization_code',
        code: input.code,
        redirect_uri: this.redirectUri,
      });

      const response = await axios.post(tokenUrl, params.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')}`,
        },
      });

      const { access_token, refresh_token, expires_in } = response.data;

      await this.db.influencer.update({
        where: { id: influencerId },
        data: {
          zoomConnected: true,
          zoomAccessToken: access_token,
          zoomRefreshToken: refresh_token,
          zoomTokenExpiry: new Date(Date.now() + expires_in * 1000),
        },
      });

      this.logger.log(`Zoom connected for influencer: ${influencerId}`);
      return { success: true };
    } catch (error) {
      this.logger.error(
        'Zoom OAuth callback error:',
        error.response?.data || error.message,
      );
      throw new Error('Failed to connect Zoom account');
    }
  }

  async getAccessToken(influencerId: string): Promise<string> {
    const influencer = await this.db.influencer.findUnique({
      where: { id: influencerId },
    });

    if (!influencer || !influencer.zoomConnected) {
      throw new Error('Zoom not connected for this influencer');
    }

    if (
      !influencer.zoomTokenExpiry ||
      new Date() >= influencer.zoomTokenExpiry
    ) {
      return this.refreshAccessToken(influencerId);
    }

    return influencer.zoomAccessToken!; // Add non-null assertion
  }

  private async refreshAccessToken(influencerId: string): Promise<string> {
    const influencer = await this.db.influencer.findUnique({
      where: { id: influencerId },
    });

    if (!influencer || !influencer.zoomRefreshToken) {
      throw new Error('Cannot refresh token: No refresh token found');
    }

    try {
      const tokenUrl = 'https://zoom.us/oauth/token';

      const params = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: influencer.zoomRefreshToken,
      });

      this.logger.log(
        `Attempting to refresh token for influencer: ${influencerId}`,
      );

      const response = await axios.post(tokenUrl, params.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')}`,
        },
      });

      const { access_token, refresh_token, expires_in } = response.data;

      await this.db.influencer.update({
        where: { id: influencerId },
        data: {
          zoomAccessToken: access_token,
          zoomRefreshToken: refresh_token, // NEW refresh token
          zoomTokenExpiry: new Date(Date.now() + expires_in * 1000),
        },
      });

      this.logger.log(
        `Token refreshed successfully for influencer: ${influencerId}`,
      );
      return access_token;
    } catch (error) {
      // Enhanced error logging
      if (error.response) {
        this.logger.error('Token refresh error:', {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data,
        });
        console.log(
          'Full Zoom error:',
          JSON.stringify(error.response.data, null, 2),
        );
      } else {
        this.logger.error('Token refresh error:', error.message);
      }

      throw new Error(
        `Failed to refresh Zoom token: ${error.response?.data?.reason || error.message}`,
      );
    }
  }

  async disconnectZoom(influencerId: string): Promise<boolean> {
    await this.db.influencer.update({
      where: { id: influencerId },
      data: {
        zoomConnected: false,
        zoomAccessToken: null,
        zoomRefreshToken: null,
        zoomTokenExpiry: null,
      },
    });

    this.logger.log(`Zoom disconnected for influencer: ${influencerId}`);
    return true;
  }

  // private async refreshAccessToken(influencerId: string): Promise<string> {
  //   const influencer = await this.db.influencer.findUnique({
  //     where: { id: influencerId },
  //   });

  //   if (!influencer || !influencer.zoomRefreshToken) {
  //     throw new Error('Cannot refresh token: No refresh token found');
  //   }

  //   try {
  //     const tokenUrl = 'https://zoom.us/oauth/token';

  //     const params = new URLSearchParams({
  //       grant_type: 'refresh_token',
  //       refresh_token: influencer.zoomRefreshToken,
  //     });

  //     const response = await axios.post(tokenUrl, params.toString(), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')}`,
  //       },
  //     });

  //     const { access_token, refresh_token, expires_in } = response.data;

  //     await this.db.influencer.update({
  //       where: { id: influencerId },
  //       data: {
  //         zoomAccessToken: access_token,
  //         zoomRefreshToken: refresh_token,
  //         zoomTokenExpiry: new Date(Date.now() + expires_in * 1000),
  //       },
  //     });

  //     this.logger.log(`Token refreshed for influencer: ${influencerId}`);
  //     return access_token;
  //   } catch (error) {
  //     this.logger.error(
  //       'Token refresh error:',
  //       error.response?.data || error.message,
  //     );
  //     console.log('error', error);
  //     throw new Error('Failed to refresh Zoom token');
  //   }
  // }
}

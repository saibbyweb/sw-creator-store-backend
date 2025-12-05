import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { ConnectGoogleCalendarInput } from './google-calendar.dto';

@Injectable()
export class GoogleAuthService {
  private readonly logger: Logger;
  private readonly redirectUri: string;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly googleOAuth2: OAuth2Client;

  constructor(private readonly db: DbService) {
    this.logger = new Logger(GoogleAuthService.name);
    this.redirectUri = process.env.GOOGLE_REDIRECT_URI!;
    this.clientId = process.env.GOOGLE_CLIENT_ID!;
    this.clientSecret = process.env.GOOGLE_CLIENT_SECRET!;

    if (!this.redirectUri || !this.clientId || !this.clientSecret) {
      this.logger.error('Google credentials are not set');
    }

    this.googleOAuth2 = new google.auth.OAuth2({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      redirectUri: this.redirectUri,
    });
  }

  getAuthUrl() {
    return this.googleOAuth2.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/calendar'],
      prompt: 'consent',
    });
  }

  async handleCallback(
    input: ConnectGoogleCalendarInput,
    influencerId: string,
  ) {
    const { tokens } = await this.googleOAuth2.getToken(input.code);

    if (!tokens.access_token || !tokens.refresh_token || !tokens.expiry_date) {
      throw new Error('Failed to get tokens');
    }

    await this.db.influencer.update({
      where: { id: influencerId },
      data: {
        googleCalendarConnected: true,
        googleAccessToken: tokens.access_token,
        googleRefreshToken: tokens.refresh_token,
        googleTokenExpiry: new Date(tokens.expiry_date),
      },
    });

    return tokens;
  }

  async getClient(influencerId: string) {
    const influencer = await this.db.influencer.findUnique({
      where: { id: influencerId },
    });

    if (!influencer) {
      throw new Error('Influencer not found');
    }

    this.googleOAuth2.setCredentials({
      access_token: influencer.googleAccessToken,
      refresh_token: influencer.googleRefreshToken,
    });

    return this.googleOAuth2;
  }
}

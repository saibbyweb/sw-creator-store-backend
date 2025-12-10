import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { GoogleAuthService } from './google-auth.service';

@Controller('google')
export class GoogleController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Get()
  async handleGoogleCallback(
    @Query('code') code: string,
    @Query('state') state: string,
    @Query('error') error: string,
    @Res() res: Response,
  ) {
    const sendHtml = (success: boolean) => {
      return res
        .status(200)

        .send(this.getCallbackHTML(success));
    };

    try {
      if (error) return sendHtml(false);
      if (!code || !state) return sendHtml(false);

      let decodedState: {
        influencerId: string;
        type: string;
        timestamp: number;
      };
      try {
        decodedState = JSON.parse(Buffer.from(state, 'base64').toString());
      } catch {
        return sendHtml(false);
      }

      const { influencerId, type, timestamp } = decodedState;

      if (!influencerId || !type) return sendHtml(false);
      if (Date.now() - timestamp > 10 * 60 * 1000) return sendHtml(false);
      if (type !== 'calendar-callback') return sendHtml(false);

      await this.googleAuthService.connectGoogleCalendar(code, influencerId);
      return sendHtml(true);
    } catch (e) {
      console.error('Callback error:', e);
      return sendHtml(false);
    }
  }

  private getCallbackHTML(success: boolean): string {
    return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${success ? 'Success' : 'Error'}</title>
  </head>
  <body>
    <script>
      if (window.opener) {
        window.opener.postMessage(
          { type: 'GOOGLE_INTEGRATION_COMPLETE', success: ${success} },
          '*'
        );
      }
      window.close();
    </script>
  </body>
</html>`;
  }
}

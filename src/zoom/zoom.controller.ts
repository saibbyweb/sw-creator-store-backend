import { Controller, Get, Query, Res } from '@nestjs/common';
import { ZoomAuthService } from './zoom-auth.service';
import { Response } from 'express';

@Controller('zoom')
export class ZoomController {
  constructor(private readonly zoomAuthService: ZoomAuthService) {}

  @Get()
  async handleZoomCallback(
    @Query('code') code: string,
    @Query('state') state: string,
    @Query('error') error: string,
    @Res() res: Response,
  ) {
    const sendHtml = (success: boolean) => {
      res.type('html');
      return res.status(200).send(this.getCallbackHTML(success));
    };

    try {
      if (error) return sendHtml(false);
      if (!code || !state) return sendHtml(false);

      const decodedState = JSON.parse(Buffer.from(state, 'base64').toString());
      const { influencerId } = decodedState;

      if (!influencerId) return sendHtml(false);

      await this.zoomAuthService.connectZoomAccount(code, influencerId);
      return sendHtml(true);
    } catch (e) {
      console.error('Zoom callback error:', e);
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
          { type: 'ZOOM_INTEGRATION_COMPLETE', success: ${success} },
          '*'
        );
      }
    window.close();
    </script>
  </body>
</html>`;
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';
import { DbService } from 'src/db/db.service';
import { SendMailInput } from './resend.dto';

@Injectable()
export class ResendService {
  private readonly logger: Logger;
  private readonly resendApiKey: string;
  private readonly resend: Resend;
  private readonly fromEmail: string;

  constructor(private readonly db: DbService) {
    this.logger = new Logger(ResendService.name);
    this.resendApiKey = process.env.RESEND_API_KEY!;
    if (!this.resendApiKey) {
      throw new Error('RESEND_API_KEY is not set');
    }
    this.resend = new Resend(this.resendApiKey);
    this.fromEmail = 'Creator Dashboard <no-reply@ninemash.com>';
  }

  async sendMail(input: SendMailInput) {
    try {
      const { data, error } = await this.resend.emails.send({
        from: input.from || this.fromEmail,
        to: input.to,
        subject: input.subject,
        html: input.html,
      });

      if (error) {
        this.logger.error('Failed to send mail');
        throw new Error(error.message);
      }

      return data;
    } catch (e) {
      this.logger.error('Failed to send mail');
      throw new Error(e);
    }
  }
}

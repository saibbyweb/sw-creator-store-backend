import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';
import { DbService } from 'src/db/db.service';
import { SendMailInput, SendRegistrationEmailInput } from './resend.dto';
import { CommunicationLogService } from 'src/communication-log/communication-log.service';
import { EmailConstructorService } from './emails/email-constructor.service';
import {
  CommunicationMode,
  CommunicationProvider,
  CommunicationStatus,
  CommunicationType,
  SendMode,
} from 'src/---generated---';

@Injectable()
export class ResendService {
  private readonly logger: Logger;
  private readonly resendApiKey: string;
  private readonly resend: Resend;
  private readonly fromEmail: string;

  constructor(
    private readonly db: DbService,
    private readonly communicationLogService: CommunicationLogService,
    private readonly emailConstructorService: EmailConstructorService,
  ) {
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

  async sendRegistrationEmail(input: SendRegistrationEmailInput) {
    try {
      const html = await this.emailConstructorService.constructWelcomeEmail(
        input.name,
      );
      const { data } = await this.resend.emails.send({
        from: this.fromEmail,
        to: input.to,
        subject:
          'Welcome to Saibbyweb Creator Store! We are glad to have you on board.',
        html,
      });

      if (data.id)
        await this.communicationLogService.createCommunicationLog({
          provider: CommunicationProvider.RESEND,
          type: CommunicationType.ACCOUNT_CREATION,
          mode: CommunicationMode.EMAIL,
          sendMode: SendMode.AUTOMATIC,
          status: CommunicationStatus.SENT,
          recipient: input.to,
          content: {
            html,
          },
        });
    } catch (e) {
      this.logger.error('Failed to send registration email');
      throw new Error(e);
    }
  }
}

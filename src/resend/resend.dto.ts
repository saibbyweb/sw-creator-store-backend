export class SendMailInput {
  from?: string;
  to: string[];
  subject: string;
  html: string;
}

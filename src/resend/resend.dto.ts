export class SendMailInput {
  from?: string;
  to: string[];
  subject: string;
  html: string;
}

export class SendRegistrationEmailInput {
  to: string;
  name: string;
}

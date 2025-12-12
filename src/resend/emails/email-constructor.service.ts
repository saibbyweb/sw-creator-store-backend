import { Injectable } from '@nestjs/common';
import { pretty, render } from '@react-email/render';
import React from 'react';
import WelcomeEmail from './welcome.email';

@Injectable()
export class EmailConstructorService {
  async constructWelcomeEmail(name: string): Promise<string> {
    try {
      const html = await render(React.createElement(WelcomeEmail, { name }));
      return await pretty(html);
    } catch (error) {
      console.error('Error constructing email:', error);
      throw error;
    }
  }
}

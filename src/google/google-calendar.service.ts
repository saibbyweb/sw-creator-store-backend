import { Injectable, Logger } from '@nestjs/common';
import { google } from 'googleapis';
import { GoogleAuthService } from './google-auth.service';

@Injectable()
export class CalendarService {
  private readonly logger: Logger;
  constructor(private googleAuth: GoogleAuthService) {
    this.logger = new Logger(CalendarService.name);
  }

  async createEvent(influencerId: string, eventData: any) {
    const auth = await this.googleAuth.getClient(influencerId);
    const calendar = google.calendar({ version: 'v3', auth });

    const event = {
      summary: eventData.summary,
      description: eventData.description,
      start: {
        dateTime: eventData.startTime,
        timeZone: eventData.timeZone || 'UTC',
      },
      end: {
        dateTime: eventData.endTime,
        timeZone: eventData.timeZone || 'UTC',
      },
      attendees: eventData.attendees || [],
    };

    const result = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
    });

    return result.data;
  }

  async listEvents(influencerId: string) {
    const auth = await this.googleAuth.getClient(influencerId);
    const calendar = google.calendar({ version: 'v3', auth });

    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return (response.data.items || []).map((event) => ({
      id: event.id,
      summary: event.summary || '',
      description: event.description || null,
      status: event.status || 'confirmed',
      htmlLink: event.htmlLink || '',
      created: event.created || '',
      updated: event.updated || '',
      creator: {
        email: event.creator?.email || '',
        self: event.creator?.self || false,
      },
      organizer: {
        email: event.organizer?.email || '',
        self: event.organizer?.self || false,
      },
      start: {
        dateTime: event.start?.dateTime || null,
        date: event.start?.date || null,
        timeZone: event.start?.timeZone || null,
      },
      end: {
        dateTime: event.end?.dateTime || null,
        date: event.end?.date || null,
        timeZone: event.end?.timeZone || null,
      },
      eventType: event.eventType || 'default',
      iCalUID: event.iCalUID || null,
    }));
  }
}

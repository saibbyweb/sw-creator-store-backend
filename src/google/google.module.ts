import { Module } from '@nestjs/common';
import { GoogleAuthService } from './google-auth.service';
import { CalendarService } from './google-calendar.service';
import { CalendarResolver } from './google-calendar.resolver';
import { GoogleController } from './google-calendar.controller';

@Module({
  providers: [GoogleAuthService, CalendarService, CalendarResolver],
  exports: [GoogleAuthService, CalendarService],
  controllers: [GoogleController],
})
export class GoogleModule {}

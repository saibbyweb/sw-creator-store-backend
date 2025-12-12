import { Module } from '@nestjs/common';
import { CommunicationLogService } from './communication-log.service';

@Module({
  providers: [CommunicationLogService],
  exports: [CommunicationLogService],
})
export class CommunicationLogModule {}

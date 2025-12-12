import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateCommunicationLogInput } from './communication-log.dto';

@Injectable()
export class CommunicationLogService {
  private readonly logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger(CommunicationLogService.name);
  }

  async createCommunicationLog(input: CreateCommunicationLogInput) {
    try {
      const communicationLog = await this.db.communicationLog.create({
        data: input,
      });
      return communicationLog;
    } catch {
      this.logger.error('Failed to create communication log');
      throw new Error('Failed to create communication log');
    }
  }
}

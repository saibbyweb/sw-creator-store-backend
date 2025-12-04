import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateStoreInput, UpdateStoreInput } from './store.dto';

@Injectable()
export class StoreService {
  private readonly logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger(StoreService.name);
  }

  async createStore(input: CreateStoreInput, influencerId: string) {
    try {
      const store = await this.db.store.create({
        data: {
          ...input,
          influencerId,
        },
      });

      return store;
    } catch {
      this.logger.error('Failed to create store');
      throw new Error('Failed to create store');
    }
  }

  async updateStore(input: UpdateStoreInput, influencerId: string) {
    try {
      const { id, ...rest } = input;

      const store = await this.db.store.update({
        where: { id, influencerId },
        data: {
          ...rest,
        },
      });

      return store;
    } catch {
      this.logger.error('Failed to update store');
      throw new Error('Failed to update store');
    }
  }
}

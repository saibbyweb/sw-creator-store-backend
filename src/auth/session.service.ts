import { Injectable } from '@nestjs/common';
import { Role } from 'src/---generated---';
import { DbService } from 'src/db/db.service';

@Injectable()
export class SessionService {
  constructor(private readonly db: DbService) {}

  async createSession(token: string, entityId: string, entityRole: string) {
    const data: any = { token };

    switch (entityRole) {
      case Role.INFLUENCER:
        data.influencerId = entityId;
        break;
      default:
        throw new Error('Invalid entity role');
    }

    return this.db.session.create({ data });
  }

  async validateSession(token: string): Promise<boolean> {
    const session = await this.db.session.findUnique({
      where: { token },
    });

    if (!session || !session.valid) {
      return false;
    }

    if (session.expiresAt && session.expiresAt < new Date()) {
      return false;
    }

    return true;
  }

  async invalidateSession(token: string) {
    return this.db.session.update({
      where: { token },
      data: { valid: false },
    });
  }
}

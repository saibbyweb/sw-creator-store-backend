import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export interface JwtPayload {
  entityId: string;
  entityRole: string;
}

@Injectable()
export class JwtService {
  private readonly secret: string;
  private readonly expiresIn = '7d';

  constructor() {
    this.secret = process.env.JWT_SECRET!;

    if (!this.secret) {
      throw new Error('JWT_SECRET is not set');
    }
  }

  generateJwt(payload: JwtPayload): string {
    return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
  }

  validateJwt(token: string): JwtPayload | null {
    try {
      return jwt.verify(token, this.secret) as JwtPayload;
    } catch {
      return null;
    }
  }
}

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtPayload, JwtService } from './jwt.service';
import { SessionService } from './session.service';

@Injectable()
export abstract class BaseAuthGuard implements CanActivate {
  constructor(
    protected readonly jwtService: JwtService,
    protected readonly sessionService: SessionService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    const { token, payload } = this.extractAndValidateToken(req);

    await this.validateSession(token);

    req.user = payload;
    return this.validateRole(payload);
  }

  private extractAndValidateToken(req: any): {
    token: string;
    payload: JwtPayload;
  } {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Missing or invalid authorization header',
      );
    }

    const token = authHeader.slice(7);
    const payload = this.jwtService.validateJwt(token);

    if (!payload) {
      throw new UnauthorizedException('Invalid token');
    }

    return { token, payload };
  }

  private async validateSession(token: string): Promise<void> {
    const isValid = await this.sessionService.validateSession(token);
    if (!isValid) {
      throw new UnauthorizedException('Session expired or invalid');
    }
  }

  protected abstract validateRole(payload: JwtPayload): boolean;
}

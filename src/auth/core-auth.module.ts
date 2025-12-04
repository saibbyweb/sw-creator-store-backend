import { Global, Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { SessionService } from './session.service';

@Global()
@Module({
  providers: [JwtService, SessionService],
  exports: [JwtService, SessionService],
})
export class CoreAuthModule {}


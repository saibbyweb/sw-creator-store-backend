import { Global, Module } from '@nestjs/common';
import { ResendService } from './resend.service';
import { ResendResolver } from './resend.resolver';
import { CommunicationLogModule } from 'src/communication-log/communication-log.module';
import { EmailConstructorService } from './emails/email-constructor.service';

@Global()
@Module({
  imports: [CommunicationLogModule],
  providers: [ResendService, ResendResolver, EmailConstructorService],
  exports: [ResendService, EmailConstructorService],
})
export class ResendModule {}

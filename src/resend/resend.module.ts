import { Module } from '@nestjs/common';
import { ResendService } from './resend.service';
import { ResendResolver } from './resend.resolver';

@Module({
  providers: [ResendService, ResendResolver],
  exports: [ResendService],
})
export class ResendModule {}

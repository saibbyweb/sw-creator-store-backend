import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { InfluencerGuard } from './influencer.guard';

@Module({
  providers: [AuthService, AuthResolver, InfluencerGuard],
  exports: [InfluencerGuard],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaResolver } from './media.resolver';
import { S3Module } from 'src/s3/s3.module';

@Module({
  imports: [S3Module],
  providers: [MediaService, MediaResolver],
  exports: [MediaService],
})
export class MediaModule {}

import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import {
  CreateMediaInput,
  FetchAllMediaInput,
  FetchMediaInput,
  MediaWithAccessUrl,
} from './media.dto';
import { S3Service } from 'src/s3/s3.service';
import { MediaPrivacy } from 'src/---generated---';

@Injectable()
export class MediaService {
  private readonly logger: Logger;
  constructor(
    private readonly db: DbService,
    private readonly s3Service: S3Service,
  ) {
    this.logger = new Logger(MediaService.name);
  }

  async createMedia(input: CreateMediaInput, influencerId: string) {
    try {
      const media = await this.db.media.create({
        data: {
          ...input,
          influencerId,
        },
        select: {
          id: true,
        },
      });

      return media;
    } catch {
      this.logger.error('Failed to create media');
      throw new Error('Failed to create media');
    }
  }

  async fetchMedia(input: FetchMediaInput, influencerId: string) {
    try {
      const media = await this.db.media.findUnique({
        where: {
          id: input.mediaId,
          influencerId,
          privacy: input.privacy ?? MediaPrivacy.PUBLIC,
        },
      });

      if (!media) {
        throw new Error('Media does not exist');
      }

      const { accessUrl } = await this.s3Service.generateSignedAccessUrl({
        key: media.key,
      });

      return {
        accessUrl,
      };
    } catch {
      this.logger.error('Failed to fetch media');
      throw new Error('Failed to fetch media');
    }
  }

  async fetchAllMedia(
    influencerId: string,
    input?: FetchAllMediaInput,
    skip?: number,
    take?: number,
  ): Promise<MediaWithAccessUrl[]> {
    try {
      const media = await this.db.media.findMany({
        where: {
          influencerId,
          privacy: input?.privacy ?? MediaPrivacy.PUBLIC,
        },
        skip,
        take,
      });

      const mediaWithAccessUrls = await Promise.all(
        media.map(async (media) => {
          const { accessUrl } = await this.s3Service.generateSignedAccessUrl({
            key: media.key,
          });
          return {
            ...media,
            temporaryAccessUrl: accessUrl,
          };
        }),
      );

      return mediaWithAccessUrls;
    } catch (error) {
      console.log(error);
      this.logger.error('Failed to fetch all media');
      throw new Error('Failed to fetch all media');
    }
  }
}

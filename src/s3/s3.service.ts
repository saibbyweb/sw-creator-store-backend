import {
  ListBucketsCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import {
  ContentTypeMap,
  GenerateSignedUploadUrlInput,
  GenerateSignedUploadUrlResponse,
} from './s3.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class S3Service {
  private readonly logger: Logger;
  private readonly s3Client: S3Client;
  private readonly region: string;
  private readonly bucketName: string;
  private readonly accessKeyId: string;
  private readonly secretAccessKey: string;
  private readonly expiresIn: number;
  constructor(private readonly db: DbService) {
    this.logger = new Logger(S3Service.name);

    this.region = process.env.AWS_REGION!;
    this.bucketName = process.env.AWS_BUCKET_NAME!;
    this.accessKeyId = process.env.AWS_ACCESS_KEY_ID!;
    this.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!;
    this.expiresIn = 3600;

    if (
      !this.region ||
      !this.bucketName ||
      !this.accessKeyId ||
      !this.secretAccessKey
    ) {
      this.logger.error('AWS credentials are not set');
    }

    this.s3Client = new S3Client({
      region: this.region,
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
      },
    });
  }

  async generateSignedUploadUrl(
    input: GenerateSignedUploadUrlInput,
  ): Promise<GenerateSignedUploadUrlResponse> {
    try {
      // Validate and get content type
      const contentType = this.getContentType(input.extension);

      // Generate unique key using UUID
      const ext = input.extension.toLowerCase().replace('.', '');
      const key = `creator-dashboard/${uuidv4()}.${ext}`;

      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        ContentType: contentType,
      });

      const signedUrl = await getSignedUrl(this.s3Client, command, {
        expiresIn: this.expiresIn,
      });

      return {
        key,
        uploadUrl: signedUrl,
      };
    } catch (error) {
      this.logger.error(`Failed to generate upload URL: ${error.message}`);
      throw new Error(`Failed to generate upload URL: ${error.message}`);
    }
  }

  async listBuckets(): Promise<boolean> {
    try {
      const command = new ListBucketsCommand({});
      const response = await this.s3Client.send(command);
      console.log('response', response);
      return true;
    } catch (error) {
      this.logger.error(`Failed to list buckets: ${error.message}`);
      throw new Error(`Failed to list buckets: ${error.message}`);
    }
  }

  private getContentType(extension: string): string {
    const ext = extension.toLowerCase().replace('.', '');
    const contentType = this.contentTypeMap[ext];

    if (!contentType) {
      this.logger.error(
        `Unsupported file extension: .${ext}. Supported types: images (jpg, png, gif, webp, svg), videos (mp4, mov, avi, mkv, webm), audio (mp3, wav, ogg, m4a, aac), and PDF.`,
      );
      throw new Error(
        `Unsupported file extension: .${ext}. Supported types: images (jpg, png, gif, webp, svg), videos (mp4, mov, avi, mkv, webm), audio (mp3, wav, ogg, m4a, aac), and PDF.`,
      );
    }

    return contentType;
  }

  private readonly contentTypeMap: ContentTypeMap = {
    // Images
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    bmp: 'image/bmp',
    ico: 'image/x-icon',

    // Videos
    mp4: 'video/mp4',
    mov: 'video/quicktime',
    avi: 'video/x-msvideo',
    mkv: 'video/x-matroska',
    webm: 'video/webm',
    flv: 'video/x-flv',
    wmv: 'video/x-ms-wmv',
    mpeg: 'video/mpeg',
    mpg: 'video/mpeg',

    // Audio
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    ogg: 'audio/ogg',
    m4a: 'audio/mp4',
    aac: 'audio/aac',
    flac: 'audio/flac',
    wma: 'audio/x-ms-wma',

    // Documents
    pdf: 'application/pdf',
  };
}

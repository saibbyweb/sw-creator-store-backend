import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { AppResolver } from './app.resolver';
import { DbModule } from './db/db.module';
import { InfluencerModule } from './influencer/influencer.module';
import { StoreModule } from './store/store.module';
import { ProductModule } from './product/product.module';
import { CoreAuthModule } from './auth/core-auth.module';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './google/google.module';
import { ZoomModule } from './zoom/zoom.module';
import { S3Module } from './s3/s3.module';
import { MediaModule } from './media/media.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { StripeModule } from './stripe/stripe.module';
import { CommunicationLogModule } from './communication-log/communication-log.module';
import { ResendModule } from './resend/resend.module';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: true,
      subscription: true,
      introspection: true,
    }),
    DbModule,
    CoreAuthModule,
    AuthModule,
    S3Module,
    InfluencerModule,
    StoreModule,
    ProductModule,
    GoogleModule,
    ZoomModule,
    MediaModule,
    PaymentMethodModule,
    StripeModule,
    CommunicationLogModule,
    ResendModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}

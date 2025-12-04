import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    app.enableCors({
      origin: '*',
    });

    const port = process.env.PORT || 4001;
    const host = '0.0.0.0';

    await app.listen(port, host);

    console.log('\n🚀 Application is running!');
    console.log(`📍 Server: http://localhost:${port}`);
    console.log(`🎯 GraphQL Playground: http://localhost:${port}/graphql`);
  } catch (error) {
    console.error('ERROR:', error.message);
    process.exit(1);
  }
}
bootstrap();

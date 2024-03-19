import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import * as cors from 'cors';
import configuration from './config/configuration';
// import modules
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ScoresModule } from './scores/scores.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ScoresModule, 
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client', 'build'),
    }),
    PrismaModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: 'http://localhost:3030',
      method: RequestMethod.ALL,
    });
  }
}

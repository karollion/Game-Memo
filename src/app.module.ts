import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoresModule } from './scores/scores.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ScoresModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

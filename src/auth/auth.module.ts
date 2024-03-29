import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { GoogleStrategy } from 'src/auth/strategies/google.strategy';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

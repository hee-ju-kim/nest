import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthGuard, AuthService],
  exports: [AuthGuard],
  controllers: [AuthController], // 다른 모듈에서 사용할 수 있도록 export
})
export class AuthModule {}

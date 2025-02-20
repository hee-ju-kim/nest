import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { WinstonLoggerService } from '../../config/winston/winston.service';
import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthService],
})
export class UserModule {
  constructor(
    private readonly logger: WinstonLoggerService,
  ) {}

  async onModuleInit() {
    this.logger.log('유저모듈 초기화 onModuleInit')
  }
}

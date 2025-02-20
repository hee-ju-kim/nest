import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    console.log('헤더', request.headers)
    const token = request.headers.authorization?.split(' ')[1]; // 'Bearer token'

    if (!token) {
      throw new UnauthorizedException('인증 토큰이 필요합니다.');
    }

    const user = await this.authService.validateToken(token);
    if (!user) {
      throw new UnauthorizedException('유효하지 않은 토큰입니다.');
    }

    request['user'] = user; // 유저 정보 저장
    return true;
  }
}

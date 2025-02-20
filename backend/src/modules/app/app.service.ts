import { Injectable, OnModuleInit, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit, OnApplicationBootstrap {
  
  // 1️⃣ 모듈이 초기화될 때 실행
  onModuleInit() {
    console.log('✅ onModuleInit: 모듈이 초기화됨');
  }

  // 2️⃣ 애플리케이션이 부트스트랩된 후 실행
  onApplicationBootstrap() {
    console.log('🚀 onApplicationBootstrap: 애플리케이션이 완전히 초기화됨');
  }

  getHello(): string {
    return 'Hello, NestJS!';
  }
}

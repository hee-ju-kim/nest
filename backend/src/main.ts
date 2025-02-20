import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { HttpExceptionFilter } from './config/error/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {logger: ['error', 'warn']});
  // app.useGlobalFilters(new HttpExceptionFilter()); // 전역 예외 필터 적용
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

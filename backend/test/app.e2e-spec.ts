import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/modules/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello, NestJS!');
  });

  it('/user (Post)', async () => {
    const user = { name: 'test', email: 'test@test.com', password: 'test111234' };
    const response = await request(app.getHttpServer()).post('/user').send(user).expect(200);
    console.log(response)
    
    // expect(response.body).toBe('This action adds a new user')
  });

  it('/user/:id (Patch)', async () => {
    const user = { name: 'test', email: 'test@test.com', password: '', test: '11' };
    const response = await request(app.getHttpServer()).patch('/user/1').send(user);
    console.log(response)
    
    // expect(response.body).toBe('This action adds a new user')
  });
});

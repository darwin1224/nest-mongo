import { TestingModule, Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Article Route tests', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /article', () => {
    return request(app.getHttpServer())
      .get('/article')
      .expect(200)
      .responseType('json');
  });

  it('POST /article', () => {
    return request(app.getHttpServer())
      .post('/article')
      .send({
        title: 'Hello World',
        body: 'Lorem Ipsum',
      })
      .expect(201)
      .responseType('json');
  });

  afterAll(async () => {
    await app.close();
  });
});

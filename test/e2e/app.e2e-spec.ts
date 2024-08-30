import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@modules/app/app.module';
import { MovieNowModule } from '@modules/movie-now/movie-now.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule, MovieNowModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('search (GET)', () => {
    return request(app.getHttpServer())
      .get('/search?q=Garfield')
      .expect(200)
      .expect((res) => {
        const body = res.body;

        expect(body).toHaveProperty('Results');
        expect(Array.isArray(body.Results)).toBe(true);
        
        expect(body).toHaveProperty('Indexers');
        expect(Array.isArray(body.Indexers)).toBe(true);
      });
  });

  it('movienow (GET)', () => {
    return request(app.getHttpServer())
      .get('/movienow')
      .expect(200)
      .expect((res) => {
        const body = res.body;

        expect(body).toHaveProperty('page');
        expect(body.page).toBe(1);
        
        expect(body).toHaveProperty('results');
        expect(Array.isArray(body.results)).toBe(true);
      });
  });
});
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@modules/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/search?q=Batman (GET)', () => {
    return request(app.getHttpServer())
      .get('/search?q=Garfield')
      .expect(200)
      .expect((res) => {
        const body = res.body;

        expect(body).toHaveProperty('rss');
        expect(body.rss).toHaveProperty('$');
          expect(body.rss.$).toHaveProperty('version', '2.0');
          expect(body.rss.$).toHaveProperty('xmlns:atom', 'http://www.w3.org/2005/Atom');
          expect(body.rss.$).toHaveProperty('xmlns:torznab', 'http://torznab.com/schemas/2015/feed');
        
        if (body.rss.chanel) { // este valor depende del servidor externo si devuelve o no estos valores
          expect(body.rss).toHaveProperty('channel');
          expect(Array.isArray(body.rss.channel[0].item)).toBe(true);
          expect(Array.isArray(body.rss.channel)).toBe(true);
        }
      });
  });
});
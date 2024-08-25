import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '@modules/app/controllers/app.controller';
import { AppService } from '@modules/app/services/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const received = appController.getHello();
      const expected = { string: 'Hello World!' };

      expect(received).toStrictEqual(expected);
    });
  });
});

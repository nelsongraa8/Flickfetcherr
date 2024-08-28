import { Module } from '@nestjs/common';
import { AppController } from '@modules/app/controllers/app.controller';
import { AppService } from '@modules/app/services/app.service';
import { HttpModule } from '@nestjs/axios';
import { CoreModule } from '@core/core.module';

@Module({
  imports: [HttpModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

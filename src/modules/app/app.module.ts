import { Module } from '@nestjs/common';
import { AppController } from '@modules/app/controllers/app.controller';
import { AppService } from '@modules/app/services/app.service';
import { HttpModule } from '@nestjs/axios';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { MovieNowModule } from '@modules/movie-now/movie-now.module';

@Module({
  imports: [HttpModule, CoreModule, SharedModule, MovieNowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MovieNowController } from './controllers/movie-now.controller';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { MovieNowService } from './services/movie-now.service';

@Module({
  imports: [CoreModule, SharedModule],
  controllers: [MovieNowController],
  providers: [MovieNowService],
})
export class MovieNowModule {}

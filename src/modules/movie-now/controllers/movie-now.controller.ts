import { Controller, Get } from '@nestjs/common';
import { MovieNowService } from '../services/movie-now.service';

@Controller('movienow')
export class MovieNowController {
  constructor(private readonly movieNowService: MovieNowService) {}

  @Get()
  async movieNow(): Promise<any> {
    return this.movieNowService.movieNowService();
  }
}

import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from '@modules/app/services/app.service';
import { Observable } from 'rxjs';

@Controller('search')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query('q') movieName: string): Promise<any> {
    return this.appService.getHello(movieName);
  }
}

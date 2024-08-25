import { Controller, Get } from '@nestjs/common';
import { AppService } from '@modules/app/services/app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    const getHello = this.appService.getHello(); 
    return getHello;
  }
}

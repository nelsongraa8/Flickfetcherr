import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}

  public async getHello(): Promise<any> {

    return this.responseHttpExternalService().then((response) => {
      return response.data;
    }
    ).catch((error) => {
      return error;
    });
  }

  private async responseHttpExternalService(): Promise<any> {
    return await firstValueFrom(this.httpService.get('http://192.168.1.2:9117/api/v2.0/indexers/dontorrent/results/torznab/api?apikey=2qcu5p593jafl80xxda0ssni49ueizcm&t=search&cat=&q=Garfield'));
  }
}

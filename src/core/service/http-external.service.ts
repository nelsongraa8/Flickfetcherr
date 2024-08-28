import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpExternalService {
  constructor(private httpService: HttpService) {}

  public async getHttpExternal(url: string): Promise<any> {
    return this.responseHttpExternalService(url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  private async responseHttpExternalService(url: string): Promise<any> {
    return await firstValueFrom(
      this.httpService.get(url),
    );
  }
}
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { parseStringPromise } from 'xml2js';

@Injectable()
export class AppService {
  movieName: string;

  constructor(private httpService: HttpService) {}

  public async getHello(movieName: string): Promise<any> {
    this.movieName = movieName;

    return this.responseHttpExternalService()
      .then(response => {
        return this.transformTextToJson(response.data);
      })
      .catch(error => {
        return error;
      });
  }

  private async responseHttpExternalService(): Promise<any> {
    return await firstValueFrom(
      this.httpService.get(this.generateURlJackett()),
    );
  }

  private transformTextToJson(textToJson: any): any {
    return parseStringPromise(textToJson);

  private generateURlJackett(): string {
    const jackett = {
      protocol: 'http',
      host: '192.168.1.2',
      port: '9117',
      apiKey: '2qcu5p593jafl80xxda0ssni49ueizcm',
  };

  const baseUrl = `${jackett.protocol}://${jackett.host}:${jackett.port}/api/v2.0/indexers/dontorrent/results/torznab/api`;
  const params = new URLSearchParams({
      apikey: jackett.apiKey,
      t: 'search',
      cat: '',
      q: this.movieName
  });

  return `${baseUrl}?${params.toString()}`;
  }
}

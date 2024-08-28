
import { Injectable } from '@nestjs/common';
import { HttpExternalService } from 'src/core/service/http-external.service';
import { parseStringPromise } from 'xml2js';

@Injectable()
export class AppService {
  movieName: string;

  constructor(private httpExternalService: HttpExternalService) {}

  public async getHello(movieName: string): Promise<any> {
    this.movieName = movieName;

    return this.httpExternalService.getHttpExternal(this.generateURlJackett())
  }

  private generateURlJackett(): string {
    const jackett = {
      protocol: 'http',
      host: '192.168.1.2',
      port: '9117',
      apiKey: '2qcu5p593jafl80xxda0ssni49ueizcm',
      indexer: 'all'
  };

  const baseUrl = `${jackett.protocol}://${jackett.host}:${jackett.port}/api/v2.0/indexers/${jackett.indexer}/results/torznab/api`;
  const params = new URLSearchParams({
      apikey: jackett.apiKey,
      t: 'search',
      cat: '',
      q: this.movieName
  });

  return `${baseUrl}?${params.toString()}`;
  }
}

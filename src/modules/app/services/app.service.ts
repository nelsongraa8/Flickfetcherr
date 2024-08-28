
import { Injectable } from '@nestjs/common';
import { HttpExternalService } from '@core/services/http-external.service';

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
      ipDomain: '192.168.1.2',
      port: '9117',
      apiKey: '2qcu5p593jafl80xxda0ssni49ueizcm',
      indexer: 'all'
  };

  const host = `${jackett.protocol}://${jackett.ipDomain}:${jackett.port}`
  const baseUrl = `${host}/api/v2.0/indexers/${jackett.indexer}/results`;
  const params = new URLSearchParams({
      apikey: jackett.apiKey,
      Query: this.movieName,
  });

  return `${baseUrl}?${params.toString()}`;
  }
}

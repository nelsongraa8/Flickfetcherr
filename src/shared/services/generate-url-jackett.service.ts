import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateUrlJackettService {
  private jacketConfig = {
    protocol: 'http',
    ipDomain: '192.168.1.2',
    port: '9117',
    apiKey: '2qcu5p593jafl80xxda0ssni49ueizcm',
    indexer: 'all',
  }

  public generateURlJackett(movieName): string {
    const host = `${this.jacketConfig.protocol}://${this.jacketConfig.ipDomain}:${this.jacketConfig.port}`;
    const baseUrl = `${host}/api/v2.0/indexers/${this.jacketConfig.indexer}/results`;
    const params = new URLSearchParams({
      apikey: this.jacketConfig.apiKey,
      Query: movieName,
    });

    return `${baseUrl}?${params.toString()}`;
  }
}

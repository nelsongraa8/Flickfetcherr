import { Injectable } from '@nestjs/common';
import { HttpExternalService } from '@core/services/http-external.service';
import { GenerateUrlJackettService } from '@shared/services/generate-url-jackett.service';

@Injectable()
export class AppService {
  movieName: string;

  constructor(
    private httpExternalService: HttpExternalService,
    private generateUrlJackettService: GenerateUrlJackettService,
  ) {}

  public async getHello(movieName: string): Promise<any> {
    this.movieName = movieName;

    return this.httpExternalService.getHttpExternal(
      this.generateUrlJackettService.generateURlJackett(this.movieName),
    );
  }
}

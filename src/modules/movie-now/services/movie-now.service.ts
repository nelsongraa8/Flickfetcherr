import { HttpExternalService } from "@core/services/http-external.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MovieNowService {
  constructor(private httpExternalService: HttpExternalService) {}

  public async movieNowService(): Promise<any> {
    return this.httpExternalService.getHttpExternal(
      'https://api.themoviedb.org/3/discover/movie?language=es-ES&region=ES&with_release_type=4&api_key=c59e1118cd4cca87caf4c3c7304f200c'
    );
  }
}



import { Injectable } from "@nestjs/common";
import { parseStringPromise } from 'xml2js';

@Injectable()
export class XmlToJsonService {
  public transform(textToJson: any): any {
    const options = {
      explicitArray: false
    };

    return parseStringPromise(textToJson, options);
  }
}
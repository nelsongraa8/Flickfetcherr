import { Module } from '@nestjs/common';
import { XmlToJsonService } from './services/xml-to-json.service';
import { GenerateUrlJackettService } from './services/generate-url-jackett.service';

@Module({
  providers: [XmlToJsonService, GenerateUrlJackettService],
  exports: [XmlToJsonService, GenerateUrlJackettService],
})
export class SharedModule {}

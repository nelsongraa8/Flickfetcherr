import { Module } from '@nestjs/common';
import { XmlToJsonService } from './services/xml-to-json.service';

@Module({
  providers: [XmlToJsonService],
  exports: [XmlToJsonService],
})
export class SharedModule {}
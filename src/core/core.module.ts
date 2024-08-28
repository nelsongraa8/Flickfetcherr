import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpExternalService } from '@core/services/http-external.service';

@Module({
  imports: [HttpModule],
  providers: [HttpExternalService],
  exports: [HttpExternalService],
})
export class CoreModule {}
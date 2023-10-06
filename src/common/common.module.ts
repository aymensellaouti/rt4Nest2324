import { Global, Module } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { MES_CONSTANTES } from '../config/constantes.config';
const UUID_PROVIDER = {
  provide: MES_CONSTANTES.UUID,
  useValue: () => 'abc',
};
@Global()
@Module({
  providers: [LoggerService, UUID_PROVIDER],
  exports: [LoggerService, UUID_PROVIDER],
})
export class CommonModule {}

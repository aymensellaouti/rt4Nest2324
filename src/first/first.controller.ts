import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { FirstService } from './service/first.service';
import { LoggerService } from '../logger/logger.service';
import { MES_CONSTANTES } from '../config/constantes.config';
/* first/cc */
@Controller('first')
export class FirstController {
  /*   firstService = new FirstService(); */
  constructor(
    private firstService: FirstService,
    private loggerService: LoggerService,
    @Inject(MES_CONSTANTES.UUID) private uuid: () => string,
  ) {}
  //first/cc
  /* Une route first/eliIji + method: Get */
  @Get('cc')
  getCc(@Param() mesParams, @Query() mesquerys) {
    this.firstService.sayHello();
    this.loggerService.logger('in cc');
    return this.uuid();
  }
  @Get(':id')
  getInfos(@Param() mesParams, @Query() mesquerys) {
    return { mesParams, mesquerys };
  }
  /* Une route first/cc + method: Get */
}

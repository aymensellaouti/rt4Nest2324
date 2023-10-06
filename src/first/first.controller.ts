import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseFilters,
} from '@nestjs/common';
import { FirstService } from './service/first.service';
import { LoggerService } from '../logger/logger.service';
import { MES_CONSTANTES } from '../config/constantes.config';
import { FirstDto, UpdateFirstDto } from './dto/first.dto';
/* first/cc */
@Controller('first')
/* @UseFilters(CustomFilter) */
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
  getCc(@Query() mesquerys) {
    console.log(' Is mesParams instanceof FirstDto ?');

    this.firstService.sayHello();
    this.loggerService.logger('in cc');
    return this.uuid();
  }
  @Post('')
  getPostCc(@Body() mesParams: FirstDto, @Query() mesquerys) {
    console.log(' Is mesParams instanceof FirstDto ?');
    console.log(mesParams instanceof FirstDto);

    this.firstService.sayHello();
    this.loggerService.logger('in cc');
    return mesParams;
  }
  @Patch('')
  patchCc(@Body() mesParams: UpdateFirstDto, @Query() mesquerys) {
    console.log(' Is mesParams instanceof FirstDto ?');
    console.log(mesParams instanceof FirstDto);

    this.firstService.sayHello();
    this.loggerService.logger('in cc');
    return mesParams;
  }
  @Get(':id')
  getInfos(@Param() mesParams, @Query() mesquerys) {
    return { mesParams, mesquerys };
  }
  /* Une route first/cc + method: Get */
}

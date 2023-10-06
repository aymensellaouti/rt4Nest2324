import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { lengthError } from '../../common/length.error';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';

export class Person {
  id: number;
  name: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

export class FirstDto {
  @MinLength(4, {
    message: lengthError(),
  })
  @MaxLength(10, { message: lengthError(false) })
  @IsNotEmpty()
  name: string;
  @Min(18)
  @IsNotEmpty()
  @Type((LeTypeVersLequelOnVaConvertir) => Number)
  @IsNumber()
  age: number;
}

export class UpdateFirstDto extends PartialType(FirstDto) {
  @IsDate()
  @IsOptional()
  updatedAt: Date;
}

import { IsNotEmpty, IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class WaterLevelDto {
  @ApiProperty()
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  time: Date;
}
import { WaterLevel } from "./../../shared/entities/WaterLevel";
import { WaterLevelController } from "./waterlevel.controller";
import { Module } from "@nestjs/common";
import { WaterLevelService } from "./waterlevel.service";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
  imports: [TypeOrmModule.forFeature([WaterLevel])],
  controllers: [WaterLevelController],
  providers: [WaterLevelService],
  exports: [WaterLevelService],
})
export class WaterLevelModule {}

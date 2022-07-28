import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { WaterLevelService } from "./waterlevel.service";
import { CustomResponse } from "../../common/helper/customresponse.helpers";
import { WaterLevelDto } from "./dto/waterlevel.dto";
import { ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiTags("waterlevel")
@Controller("waterlevel")
export class WaterLevelController {
  constructor(private readonly waterLevelService: WaterLevelService) {}

  @Get("/getLevel")
  async getLevel() {
    const res: CustomResponse = {};
    try {
      res.data = await this.waterLevelService.getLevel();
      res.success = true;
      return res;
    } catch (e) {
      res.success = false;
      res.message = e.message !== undefined ? e.message : e;
      return res;
    }
  }

  @Post("/log")
  async log(@Body() waterLevelDto: WaterLevelDto) {
    const res: CustomResponse = {};
    try {
      res.data = await this.waterLevelService.log(waterLevelDto);
      res.success = true;
      return res;
    } catch (e) {
      res.success = false;
      res.message = e.message !== undefined ? e.message : e;
      return res;
    }
  }
}

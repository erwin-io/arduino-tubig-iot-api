import { WaterLevel } from "./../../shared/entities/WaterLevel";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WaterLevelDto } from "./dto/waterlevel.dto";

@Injectable()
export class WaterLevelService {
  constructor(
    @InjectRepository(WaterLevel)
    private readonly waterLevelRepo: Repository<WaterLevel>
  ) {}

  async getLevel() {
    return await this.waterLevelRepo.find({
      order: { id: "DESC" }, // order results
      take: 1, // limit 1
    });
  }

  async log(waterLevelDto: WaterLevelDto) {
    const { value, time } = waterLevelDto;

    return await this.waterLevelRepo.save({
      value,
      time,
    });
  }
}

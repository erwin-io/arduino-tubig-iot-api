import { Test, TestingModule } from "@nestjs/testing";
import { WaterLevelService } from "./waterlevel.service";

describe("WaterLevelService", () => {
  let service: WaterLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaterLevelService],
    }).compile();

    service = module.get<WaterLevelService>(WaterLevelService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

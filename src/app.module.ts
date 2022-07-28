import { WaterLevelModule } from "./controller/waterlevel/waterlevel.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./shared/typeorm/typeorm.service";
import { getEnvPath } from "./common/helper/env.helper";
import { ConfigModule } from "@nestjs/config";
import { AppService } from "./app.service";

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    WaterLevelModule,
  ],
  providers: [AppService],
})
export class AppModule {}

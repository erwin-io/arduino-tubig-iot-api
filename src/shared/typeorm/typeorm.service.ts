import { Injectable, Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { WaterLevel } from "../entities/WaterLevel";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const dbtype = this.config.get<string>("DATABASE_TYPE");
    if (dbtype === "mssql") {
      return {
        type: dbtype,
        host: this.config.get<string>("DATABASE_HOST"),
        // port: Number(this.config.get<number>("DATABASE_PORT")),
        database: this.config.get<string>("DATABASE_NAME"),
        username: this.config.get<string>("DATABASE_USER"),
        password: this.config.get<string>("DATABASE_PASSWORD"),
        entities: [WaterLevel],
        synchronize: false,
        options: { encrypt: false },
      };
    } else if (dbtype === "postgres") {
      return {
        type: dbtype,
        host: this.config.get<string>("DATABASE_HOST"),
        port: Number(this.config.get<number>("DATABASE_PORT")),
        database: this.config.get<string>("DATABASE_NAME"),
        username: this.config.get<string>("DATABASE_USER"),
        password: this.config.get<string>("DATABASE_PASSWORD"),
        entities: [WaterLevel],
        synchronize: false,
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false, // This line will fix new error
        },
      };
    } else {
      throw new Error("Database type not set!");
    }
  }
}

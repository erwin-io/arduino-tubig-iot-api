import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity("waterlevel", { schema: "public" })
export class WaterLevel {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public value: number;

  @Column({ type: "timestamp" })
  public time: Timestamp;
}

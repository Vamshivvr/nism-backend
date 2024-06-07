import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './User';
import { Employee } from './Employee';

@Table
export class ActivityLog extends Model<ActivityLog> {
  @PrimaryKey
  @AutoIncrement  
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number;

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  empId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  empName!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  activity!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  timeStamp!: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  updatedBy!: string;

  @BelongsTo(()=> User)
  user!: User

  @BelongsTo(() => Employee)
  employee!: Employee;
}

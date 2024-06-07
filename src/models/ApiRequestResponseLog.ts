import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript';
import { Employee } from './Employee';
import { User } from './User';

@Table
export class apiRequestResponseLog extends Model<apiRequestResponseLog> {
  @PrimaryKey
  @AutoIncrement  
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  id!: number;

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  empId!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  reqMethod !: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  reqEndpoint !: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  reqData!: string;

  @BelongsTo(() => Employee)
  employee!: Employee;

  @BelongsTo(() => User)
  user!: User;
}

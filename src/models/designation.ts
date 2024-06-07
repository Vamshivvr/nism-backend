import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { LOB } from './Lob';

@Table
export class Designation extends Model<Designation> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  id!: number;

  @ForeignKey(() => LOB)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  lobId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @BelongsTo(() => LOB)
  lob!: LOB;
}

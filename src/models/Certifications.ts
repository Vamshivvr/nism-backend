import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { CertificationType } from './Enums';
import { Employee } from './Employee';

@Table
export class CertificationDetails extends Model<CertificationDetails> {
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

  @Column({
    type: DataType.ENUM(...Object.values(CertificationType)),
    allowNull: false
  })
  certificationType!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  certificationDate!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  certificationFromDate!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  certificationValidDate!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  EnrollmentDate!: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  NismScore!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  loaded_file?: string;

  @BelongsTo(() => Employee)
  employee!: Employee;
}

import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript';
import { emailType } from './Enums';
import { Employee } from './Employee';

@Table
export class EmailLog extends Model<EmailLog> {
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
    type: DataType.ENUM(...Object.values(emailType)),
    allowNull: false
  })
  emailType!: emailType;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  SentDate !: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  emailContent!: string;

  @BelongsTo(() => Employee)
  employee!: Employee;
}

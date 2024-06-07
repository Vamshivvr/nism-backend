import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, HasOne, BelongsTo } from 'sequelize-typescript';
import { EmailReminder, remainderSent } from './Enums';
import { User } from './User';
import { Employee } from './Employee';

@Table
export class emailReminderLog extends Model<emailReminderLog> {
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
    type: DataType.ENUM(...Object.values(EmailReminder)),
    allowNull: false
  })
  ReminderType!: EmailReminder;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  SentDate !: Date;

  @Column({
    type: DataType.ENUM(...Object.values(remainderSent)),
    allowNull: false
  })
  SentBy!: remainderSent;

  @BelongsTo(() => Employee)
  employee!: Employee;
  
  @BelongsTo(() => User)
  user!: User;
}

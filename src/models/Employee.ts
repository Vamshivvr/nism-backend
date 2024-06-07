import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { EmpStatus, NismStatus, CertificateStatus } from './Enums';
import { User } from './User';
import { CertificationDetails } from './Certifications';
import { ActivityLog } from './ActivityLog';
import { EmailLog } from './EmailLog';
import { apiRequestResponseLog } from './ApiRequestResponseLog';

@Table
export class Employee extends Model<Employee> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

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
  panNo!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  dateOfJoin!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  lob!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  designation!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  grade!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  l1ManagerName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  functionalHead!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  practiceHead!: string;

  @Column({
    type: DataType.ENUM(...Object.values(EmpStatus)),
    allowNull: false
  })
  empStatus!: EmpStatus;

  @Column({
    type: DataType.ENUM(...Object.values(NismStatus)),
    allowNull: true
  })
  nismStatus?: NismStatus;

  @Column({
    type: DataType.ENUM(...Object.values(CertificateStatus)),
    allowNull: true
  })
  certificateStatus?: CertificateStatus;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  mobileNo?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  profilePic?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  name?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  reportingManager?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  region?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  loginIP!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  lastRemindedAt?: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  lastLoginTime?: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  location?: string;

  @BelongsTo(()=> User)
    user!: User

  @HasMany(()=>CertificationDetails)
  certificates!: CertificationDetails
  
  // @HasMany(()=>EmailLog)
  // emaillog!: EmailLog

  @HasMany(()=>EmailLog)
  emaillog!: EmailLog

  @HasMany(() => ActivityLog)
  activitylog!: ActivityLog[];

  @HasMany(() => apiRequestResponseLog)
  apiData!: apiRequestResponseLog[];
}

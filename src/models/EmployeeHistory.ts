import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './User';
import { EmployeeImports } from './EmployeeImport';
import { LOB } from './Lob';

enum EmpStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

enum NISMStatus {
  Completed = 'Completed',
  NotCompleted = 'Not Completed'
}

enum CertificateStatus {
  Passed = 'Passed',
  Failed = 'Failed'
}

@Table
export class EmployeeHistory extends Model<EmployeeHistory> {
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
    type: DataType.ENUM(...Object.values(NISMStatus)),
    allowNull: true
  })
  nismStatus?: NISMStatus;

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
    allowNull: true
  })
  location?: string;

  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  lastLoginTime?: Date;

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

  @BelongsTo(() => User)
  user!: User;

}

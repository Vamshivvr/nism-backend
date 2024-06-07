import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasOne, HasMany } from 'sequelize-typescript';
import { UserRole } from './Enums';
import { Employee } from './Employee';
import { ActivityLog } from './ActivityLog';
import { apiRequestResponseLog } from './ApiRequestResponseLog';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  passwordHash!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  salt!: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    allowNull: false
  })
  role!: UserRole;

  @HasOne(() => Employee)
  employee!: Employee;

  @HasMany(() => ActivityLog)
  activitylog!: ActivityLog[];

  @HasMany(() => apiRequestResponseLog)
  apiData!: apiRequestResponseLog[];

  

  // @HasOne(() => EmployeeImports)
  // employeeImports!: EmployeeImports[];
}




// import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasOne, HasMany, BelongsTo } from 'sequelize-typescript';
// import { UserRole } from './Enums';
// import { Employee } from './Employee';
// import { ActivityLog } from './ActivityLog';
// import { EmployeeImports } from './EmployeeImport';
// import { apiRequestResponseLog } from './ApiRequestResponseLog';

// @Table
// export class User extends Model<User> {
//   @PrimaryKey
//   @AutoIncrement  
//   @Column({
//     type: DataType.INTEGER,
//     allowNull: false
//   })
//   id!: number;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false
//   })
//   email!: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false
//   })
//   passwordHash!: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false
//   })
//   salt!: string;

//   @Column({
//     type: DataType.ENUM(...Object.values(UserRole)),
//     allowNull: false
//   })
//   role!: UserRole;

//   @HasOne(() => Employee)
//   employee!: Employee;
  
//   @HasMany(() => ActivityLog)
//   activitylog!: ActivityLog[];

//   @BelongsTo(() => EmployeeImports)
//   admin!: EmployeeImports;

//   @HasMany(() => apiRequestResponseLog)
//   apiData!: apiRequestResponseLog[];

//   @HasOne(() => EmployeeImports)
//   employeeImports!: EmployeeImports;
// }

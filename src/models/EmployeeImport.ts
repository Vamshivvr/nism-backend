import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class EmployeeImports extends Model<EmployeeImports> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  id!: number;

  // @ForeignKey(() => User)
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false
  // })
  // userId!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  timestamp!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  loaded_file!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  total_records!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  valid_records!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  errors!: number;

  // @BelongsTo(() => User)
  // user!: User;  
}





// import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasOne, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';

// import { User } from './User';

// @Table
// export class EmployeeImports extends Model<EmployeeImports> {
//   @PrimaryKey
//   @AutoIncrement  
//   @Column({
//     type: DataType.INTEGER,
//     allowNull: false
//   })
//   id!: number;

  
//   @ForeignKey(() => User)
//   @Column({
//     type: DataType.INTEGER,
//     allowNull: false
//   })
//   userId!: number;



//   @Column({
//     type: DataType.DATE,
//     allowNull: false
//   })
//   timestamp!: Date;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false
//   })
//   loaded_file!: string;

//   @Column({
//     type: DataType.INTEGER,
//     allowNull: false
//   })
//   total_records!: number;

//   @Column({
//     type: DataType.INTEGER,
//     allowNull: false
//   })
//   valid_records!: number;

//   @Column({
//     type: DataType.INTEGER,
//     allowNull: false
//   })
//   errors!: number;

//   @BelongsTo(() => User)
//   user!: User;
// }

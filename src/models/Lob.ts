import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Designation } from './designation';

enum CertificationType {
  A2 = '2A',
  B2 = '2B',
  A5 = '5A',
}

@Table
export class LOB extends Model<LOB> {
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
  name!: string;
  
  @ForeignKey(() => LOBLevel)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  minimumEligibilityLevel!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  designation!: string;

  @Column({
    type: DataType.ENUM(...Object.values(CertificationType)),
    allowNull: false
  })
  certificationType!: CertificationType;
  
  @HasMany(() => LOBLevel)
  levels!: LOBLevel[];
}

@Table
export class LOBLevel extends Model<LOBLevel> {
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
  level!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  eligible!: string;

  @BelongsTo(() => LOB)
  lob!: LOB;

  @HasMany(() => Level)
  levels!: Level[];
}

@Table
export class Level extends Model<Level> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  id!: number;

  @ForeignKey(() => LOBLevel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  lobLevelId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @BelongsTo(() => LOBLevel)
  lobLevel!: LOBLevel;
}

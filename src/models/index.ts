import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import { User } from './User';
import { Employee } from './Employee';
import { CertificationDetails } from './Certifications';
import { ActivityLog } from './ActivityLog';
import { EmployeeImports } from './EmployeeImport';
import { emailReminderLog } from './EmailReminderLog';
import { EmailLog } from './EmailLog';
import { apiRequestResponseLog } from './ApiRequestResponseLog';
import { Designation } from './designation';
import { LOB , LOBLevel , Level } from './Lob';
import { Dialect } from 'sequelize';
const { SQL_DIALECT : dialect} = process.env;
const sequelize = new Sequelize({
  dialect: dialect as Dialect || "sqlite",
  models: [
    User,
    Employee, 
    CertificationDetails, 
    ActivityLog, 
    EmployeeImports, 
    emailReminderLog, 
    EmailLog, 
    LOB,
    LOBLevel,
    Designation,
    Level,
    apiRequestResponseLog
  ], // or [__dirname + '/models']
});

export default sequelize;

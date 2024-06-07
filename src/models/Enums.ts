export enum UserRole {
  Admin = 'admin',
  User = 'user',
}

export enum EmpStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export enum NismStatus {
  Completed = 'Completed',
  NotCompleted = 'Not Completed'
}

export enum CertificateStatus {
  Passed = 'Passed',
  Failed = 'Failed'
}

export enum CertificationType {
  NISM = 'NISM',
  CPE = 'CPE',
}

export enum EmailReminder {
  firstRemainder = 'C1_10days',
  secondRemainder = 'C1_30days',
  thirdRemainder = 'C1_60days',
  fourthRemainder = 'C1_75days',
  fifthRemainder = 'C2_91days',
  sixthRemainder = 'C3_45days',
  seventhReminder = 'C3_30days',
  eightRemainder = 'C3_15days',
  ninthRemainder = 'C3_7days',
  tenthRemainder = 'C4_7days',
  elevenRemainder = 'manual',
}

export enum remainderSent {
  admin = 'Admin',
  system = 'System',
}

export enum emailType {
  reminder = 'reminder',
  otp = 'otp',
  confirmation = 'confirmation'
}

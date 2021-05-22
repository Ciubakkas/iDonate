export interface ApplicationError {
  message: string;
  level: ErrorLevel;
  detailed?: any;
}

export enum ErrorLevel {
  LOW = "LOW",
  BREAKING = "BREAKING",
  WARNING = "WARNING",
}

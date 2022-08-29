import * as winston from 'winston';

const { format } = winston;

const myFormat = format.printf(
  ({ level, message, timestamp }) => `${timestamp} - ${level}: ${message}`
);

export class Logging {
  public static defaultTransportInstance = new winston.transports.Console({
    handleExceptions: true,
    level: 'info',
  });

  public static logger: winston.Logger = winston.createLogger({
    transports: [Logging.defaultTransportInstance],
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
      format.colorize(),
      format.splat(),
      format.simple(),
      myFormat
    ),
    exitOnError: false,
  });

  public static setLoglevel(level: string) {
    Logging.defaultTransportInstance.level = level;
  }
}

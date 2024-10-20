import { AlertEnum } from './alert.enum';

export class Alert {
  message: string;
  type: string;

  constructor(alert) {
    this.message = alert.message;
    this.type = alert.type;
  }

  isInfo() {
    return this.type === AlertEnum.info;
  }

  isSuccess() {
    return this.type === AlertEnum.success;
  }


  isWarning() {
    return this.type === AlertEnum.warning;
  }

  isError() {
    return this.type === AlertEnum.error;
  }
}
import { Injectable } from '@angular/core';
import { Alert } from '@core/models/alert';
import { AlertEnum } from '@core/models/alert.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _alert$ = new BehaviorSubject<Alert | null>(null);
  private time = 5000;

  get alert$() {
    return this._alert$.asObservable();
  }

  setAlert(alert: Alert) {
    this._alert$.next(alert);
  }

  showAlertInfo(message: string) {
    this.setAlert(new Alert({
      message,
      type: AlertEnum.info
    }));
    this.hideAlert();
  }

  showAlertError(message: string) {
    this.setAlert(new Alert({
      message,
      type: AlertEnum.error
    }));
    this.hideAlert();
  }

  hideAlert() {
    setTimeout(() => {
      this.setAlert(null);
    }, this.time);
  }
}

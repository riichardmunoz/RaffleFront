import { Component } from '@angular/core';
import { AlertService } from '@core/services/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  alert$ = this.alertService.alert$;
  constructor(
    private alertService: AlertService
  ) { }



}

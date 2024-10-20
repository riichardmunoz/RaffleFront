import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _showSpinner$ = new BehaviorSubject<boolean | null>(null);

  getShowSpinner(): Observable<boolean> {
    return this._showSpinner$.asObservable();
  }

  setSpinnerShow(showSpinner: boolean) {
    this._showSpinner$.next(showSpinner);
  }

}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from '@core/components/modal-confirmation/modal-confirmation.component';
import { ModalErrorComponent } from '@core/components/modal-error/modal-error.component';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public dialog: MatDialog
  ) { }

  openModalError(message: string) {
    this.dialog.open(ModalErrorComponent, { data: { message } });
  }

  openModalConfirmation(): Promise<boolean> {
    const dialogRef = this.dialog.open(ModalConfirmationComponent);
    return firstValueFrom(dialogRef.afterClosed());
  }
}

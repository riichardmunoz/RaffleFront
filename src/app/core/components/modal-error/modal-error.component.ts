import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string | null },
  ) { }

}

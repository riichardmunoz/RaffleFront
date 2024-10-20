import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalType } from 'app/shared/enums/modal-type.enum';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() level = '';
  @Input() content = '';
  @Input() title = '';
  @Input() withBtnConfirm = false;
  @Input() withBtnCancel = true;
  @Input() type = ModalType.Info;
  @Output() confirmed = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter();

  txtCancel: string;
  txtButton: string;

  constructor(public modal: NgbActiveModal) { }
  confirm() {
    this.confirmed.emit(true);
    this.modal.close();
  }

  cancel() {
    this.closed.emit();
    this.modal.close();
  }
}

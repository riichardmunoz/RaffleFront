import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerDirective } from './directives/spinner/spinner.directive';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { ModalErrorComponent } from './components/modal-error/modal-error.component';
import { SharedModule } from '@shared/shared.module';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SpinnerDirective,
    ModalErrorComponent,
    ModalConfirmationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SpinnerDirective,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class CoreModule { }

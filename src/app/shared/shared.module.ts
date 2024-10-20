import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
    declarations: [
        AlertComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        MaterialModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AlertComponent
    ]
})
export class SharedModule { }

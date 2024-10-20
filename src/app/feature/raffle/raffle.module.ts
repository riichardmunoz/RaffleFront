import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaffleOptionsComponent } from './pages/raffle/raffle-options.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RaffleRoutingModule } from './raffle-routing.module';
import { MaterialModule } from '@shared/modules/material/material.module';
import { MatTabsModule } from '@angular/material/tabs';
import { RaffleCreateProductComponent } from './components/raffle-create-product/raffle-create-product.component';
import { RaffleAssignNumberComponent } from './components/raffle-assign-number/raffle-assign-number.component';

@NgModule({
  declarations: [
    RaffleOptionsComponent,
    RaffleCreateProductComponent,
    RaffleAssignNumberComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    RaffleRoutingModule,
    MatTabsModule,
    FormsModule
  ],
  exports: [
    RaffleOptionsComponent,
    RaffleCreateProductComponent,
    RaffleAssignNumberComponent
  ]
})
export class RaffleModule { }

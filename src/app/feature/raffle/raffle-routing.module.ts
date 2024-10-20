import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RaffleOptionsComponent } from './pages/raffle/raffle-options.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'raffle-options', component: RaffleOptionsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class RaffleRoutingModule { }

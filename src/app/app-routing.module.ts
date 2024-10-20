import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'feature/raffle/raffle-options', pathMatch: 'full' },
  { path: 'feature/raffle', loadChildren: () => import('./feature/raffle/raffle.module').then(m => m.RaffleModule) },
  { path: 'raffle', redirectTo: 'feature/raffle', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

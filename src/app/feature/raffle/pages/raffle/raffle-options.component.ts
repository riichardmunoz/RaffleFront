import { Component } from '@angular/core';

@Component({
  selector: 'raffle-options',
  templateUrl: './raffle-options.component.html',
  styleUrls: ['./raffle-options.component.scss']
})
export class RaffleOptionsComponent {
  constructor() {}

  onTabChange(tabName: string) {
    console.log(`Tab seleccionada: ${tabName}`);
  }
}

import { Component } from '@angular/core';
import { AssignedNumberRequest } from '@feature/raffle/shared/model/assignedNumberRequest';
import { RaffleService } from '@feature/raffle/shared/services/raffle-service/raffle.service';

@Component({
  selector: 'app-raffle-assign-number',
  templateUrl: './raffle-assign-number.component.html',
  styleUrls: ['./raffle-assign-number.component.scss']
})
export class RaffleAssignNumberComponent {
  selectedRaffle: string = '';
  selectedUser: string = '';

  constructor(private raffleService: RaffleService) {
  }

  generateNumber(): void {
    if (this.selectedRaffle && this.selectedUser) {
      const assignedNumberRequest: AssignedNumberRequest = {
        productId: this.selectedRaffle,
        userId: this.selectedUser,
      };

      this.raffleService.assignNumber(assignedNumberRequest).subscribe({
        next: (response) => {
          alert(`Número generado con éxito. El número es: ${response.number}`);
          this.selectedRaffle = null;
        this.selectedUser = null;
        },
        error: () => {
          alert('Hubo un error al generar el número. Inténtelo de nuevo.');
        }
      });
    } else {
      alert('Por favor, seleccione un sorteo y un usuario.');
    }
  }
}

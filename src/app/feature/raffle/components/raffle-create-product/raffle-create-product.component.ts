import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductRequest } from '@feature/raffle/shared/model/productRequest';
import { RaffleService } from '@feature/raffle/shared/services/raffle-service/raffle.service';

@Component({
  selector: 'app-raffle-create-product',
  templateUrl: './raffle-create-product.component.html',
  styleUrls: ['./raffle-create-product.component.scss']
})
export class RaffleCreateProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private raffleService: RaffleService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productDescription: ['']
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {

      const productData: ProductRequest = {
        name: this.productForm.value.productName,
        description: this.productForm.value.productDescription,
        clientId: '79CB32A8-6384-42F4-BDAE-D0E66ADCDF14'
      };

      this.raffleService.createProduct(productData).subscribe({
        next: () => {
          alert('Producto guardado con éxito.');
          this.productForm.reset();
        },
        error: () => {
          alert('Hubo un error al guardar el producto. Inténtelo de nuevo.');
        }
      });
    }
  }
}

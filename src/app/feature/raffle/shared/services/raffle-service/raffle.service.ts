import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "@core/services/base.service";
import { environment } from "@environments/environment";
import { ProductRequest } from "../../model/productRequest";
import { AssignedNumberRequest } from "../../model/assignedNumberRequest";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RaffleService extends BaseService {
  private raffleApi = environment.microservices.raffleApi;
  constructor(protected httpClient: HttpClient) { super(httpClient); }

  createProduct(request: ProductRequest) {
    return this.httpClient.post(`${this.raffleApi}/api/Product`, request)
  }

  assignNumber(request: AssignedNumberRequest): Observable<any> {
    return this.httpClient.post(`${this.raffleApi}/api/AssignedNumber`, request)
  }
}

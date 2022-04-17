import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Supplier } from '../Class/supplier';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  constructor(private httpClient: HttpClient) {}

  getSUpplierList(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(
      'http://localhost:8080/api/get/supplier'
    );
  }

  createSupplier(supplier: Supplier): Observable<Object> {
    return this.httpClient.post(
      'http://localhost:8080/api/save/supplier',
      supplier
    );
  }

  getSupplierById(supplierId: number): Observable<Supplier> {
    return this.httpClient.get<Supplier>(
      'http://localhost:8080/api/get/' + supplierId
    );
  }
  updateSupplier(supplierId: number, supplier: Supplier): Observable<Object> {
    return this.httpClient.put(
      'http://localhost:8080/api/put/' + supplierId,
      supplier
    );
  }

  deleteSupplier(supplierId: number): Observable<Object> {
    return this.httpClient.delete(
      'http://localhost:8080/api/delete/' + supplierId
    );
  }
}

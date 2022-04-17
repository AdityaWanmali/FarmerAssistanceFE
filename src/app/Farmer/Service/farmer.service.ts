import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmer } from '../Class/farmer';

@Injectable({
  providedIn: 'root',
})
export class FarmerService {
  constructor(private httpClient: HttpClient) {}
  getFarmerList(): Observable<Farmer[]> {
    return this.httpClient.get<Farmer[]>(
      'http://localhost:8080/api/getFarmers'
    );
  }

  createFarmer(farmer: Farmer): Observable<Object> {
    return this.httpClient.post('http://localhost:8080/api/addFarmer', farmer);
  }

  getFarmerById(farmer_id: number): Observable<Farmer> {
    return this.httpClient.get<Farmer>(
      'http://localhost:8080/api/getFarmer/' + farmer_id
    );
  }

  updateFarmer(farmer_id: number, farmer: Farmer): Observable<Object> {
    return this.httpClient.put(
      'http://localhost:8080/api/update/' + farmer_id,
      farmer
    );
  }

  deleteFarmer(farmer_id: number): Observable<Object> {
    return this.httpClient.delete(
      'http://localhost:8080/api/deleteFarmer/' + farmer_id
    );
  }
}

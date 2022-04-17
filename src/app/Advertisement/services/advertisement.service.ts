import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Advertisement } from '../Class/advertisement';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  constructor(private httpClient: HttpClient) {}

  getAdvertisementList(): Observable<Advertisement[]> {
    return this.httpClient.get<Advertisement[]>(
      'http://localhost:8080/api/get'
    );
  }

  createAdvertisement(advertisement: Advertisement): Observable<Object> {
    return this.httpClient.post('http://localhost:8080/api/add', advertisement);
  }

  getAdvertisementById(addId: number): Observable<Advertisement> {
    return this.httpClient.get<Advertisement>(
      'http://localhost:8080/api/getFarmer/' + addId
    );
  }

  /*  updateFarmer(farmer_id: number, farmer: Farmer): Observable<Object> {
    return this.httpClient.put(
      'http://localhost:6060/api/update/' + farmer_id,
      farmer
    );
  } */

  /* deleteAdvertisement(addId: number): Observable<Object> {
    return this.httpClient.delete(
      'http://localhost:6060/api/deleteFarmer/' + addId
    );
  } */
}

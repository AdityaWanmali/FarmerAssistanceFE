import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Crop } from '../class/crop';

@Injectable({
  providedIn: 'root',
})
export class CropService {
  constructor(private httpClient: HttpClient) {}

  getCropList(): Observable<Crop[]> {
    return this.httpClient.get<Crop[]>('http://localhost:8080/api/getCrops');
  }

  createCrop(crop: Crop): Observable<Object> {
    return this.httpClient.post('http://localhost:8080/api/addCrop', crop);
  }

  getCropById(crop_id: number): Observable<Crop> {
    return this.httpClient.get<Crop>(
      'http://localhost:8080/api/getCrop/' + crop_id
    );
  }

  updateCrop(crop_id: number, crop: Crop): Observable<Object> {
    return this.httpClient.put(
      'http://localhost:8080/api/update/' + crop_id,
      crop
    );
  }

  deleteCrop(crop_id: number): Observable<Object> {
    return this.httpClient.delete(
      'http://localhost:8080/api/deleteCrop/' + crop_id
    );
  }
}

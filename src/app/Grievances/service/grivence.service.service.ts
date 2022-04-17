import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Grievances } from '../class/grievances';

export class grievances {
  constructor(
    public complaintId: number,
    public complaintMessage: string,
    public farmer: Farmer
  ) {
    this.complaintId = complaintId;
    this.complaintMessage = complaintMessage;
  }
}

export class Farmer {
  constructor(
    public farmer_id: number,
    public farmer_name: String,
    public farmer_address: String,
    public farmer_contact_number: number
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class GrievanceService {
  constructor(private httpClient: HttpClient) {}

  getGrievanceList(): Observable<Grievances[]> {
    return this.httpClient.get<Grievances[]>(
      'http://localhost:8080/api/get/grievances'
    );
  }

  createGrievance(grievance: Grievances): Observable<Object> {
    return this.httpClient.post(
      'http://localhost:8080/api/save/grievances',
      grievance
    );
  }

  getGrievanceById(complaintId: number): Observable<Grievances> {
    return this.httpClient.get<Grievances>(
      'http://localhost:8080/api/get/complaint/' + complaintId
    );
  }
  updateGrievance(
    complaintId: number,
    grievance: Grievances
  ): Observable<Object> {
    return this.httpClient.put(
      'http://localhost:8080/api/put/complaint/' + complaintId,
      grievance
    );
  }

  deleteGrievance(complaintId: number): Observable<Object> {
    return this.httpClient.delete(
      'http://localhost:8080/api/delete/complaint/' + complaintId
    );
  }
}

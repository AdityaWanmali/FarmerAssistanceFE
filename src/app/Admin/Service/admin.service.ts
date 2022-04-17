import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Class/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  getAdminList(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>('http://localhost:8080/api/getadmins');
  }

  createAdmin(admin: Admin): Observable<Object> {
    return this.httpClient.post('http://localhost:8080/api/addAdmin', admin);
  }

  getAdminById(adminId: number): Observable<Admin> {
    return this.httpClient.get<Admin>(
      'http://localhost:8080/api/getAdmin/' + adminId
    );
  }
  updateAdmin(adminId: number, admin: Admin): Observable<Object> {
    return this.httpClient.put(
      'http://localhost:8080/api/admin/update/' + adminId,
      admin
    );
  }

  deleteAdmin(adminId: number): Observable<Object> {
    return this.httpClient.delete(
      'http://localhost:8080/api/deleteAdminById/' + adminId
    );
  }
}

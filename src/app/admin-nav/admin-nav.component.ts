import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin/Class/admin';
import { AdminService } from '../Admin/Service/admin.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css'],
})
export class AdminNavComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  admins: Admin[] = [];
  nameSearch: string = '';

  ngOnInit(): void {
    this.getAdmins();
  }
  adminDetails(adminId: number) {
    this.router.navigate(['admin-details', adminId]);
  }

  updateAdmin(adminId: number): void {
    this.router.navigate(['update-admin', adminId]);
  }

  deleteAdmin(adminId: number): void {
    if (confirm('Do you want to delete this Admin ?'))
      alert('Admin Deleted Successfully');
    this.adminService.deleteAdmin(adminId).subscribe((data) => {
      console.log(data);
      this.getAdmins();
    });
  }
  private getAdmins() {
    this.adminService.getAdminList().subscribe((data) => {
      this.admins = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../Class/admin';
import { AdminService } from '../../Service/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
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
  public isCollapsed = false;
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../../Class/admin';
import { AdminService } from '../../Service/admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css'],
})
export class AdminDetailsComponent implements OnInit {
  adminId: any;
  admin!: Admin;
  constructor(
    private adminService: AdminService,
    private rout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adminId = this.rout.snapshot.params['adminId'];

    this.admin = new Admin(0, ' ', ' ');
    this.adminService.getAdminById(this.adminId).subscribe((data) => {
      this.admin = data;
    });
  }
}

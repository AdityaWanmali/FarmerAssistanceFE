import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../Class/admin';
import { AdminService } from '../../Service/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css'],
})
export class CreateAdminComponent implements OnInit {
  admin: Admin = new Admin(0, '', '');
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  saveAdmin() {
    this.adminService.createAdmin(this.admin).subscribe(
      (data) => {
        console.log(data);
        this.goToAdminList();
      },
      (error) => console.log(error)
    );
  }

  goToAdminList(): void {
    this.router.navigate(['/admins']);
  }

  onSubmit() {
    console.log(this.admin);
    alert('Admin created successfully');
    this.saveAdmin();
  }
}

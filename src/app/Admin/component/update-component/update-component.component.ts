import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../../Class/admin';
import { AdminService } from '../../Service/admin.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css'],
})
export class UpdateComponentComponent implements OnInit {
  adminId!: number;
  admin: Admin = new Admin(0, ' ', ' ');
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['adminId'];

    this.adminService.getAdminById(this.adminId).subscribe(
      (data) => {
        this.admin = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.adminService.updateAdmin(this.adminId, this.admin).subscribe(
      (data: any) => {
        alert('Admin updated successfully');
        this.goToAdminList();
      },
      (error: any) => console.log(error)
    );
  }
  goToAdminList() {
    this.router.navigate(['/admins']);
  }
}

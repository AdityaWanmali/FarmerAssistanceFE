import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farmer } from 'src/app/Farmer/Class/farmer';
import { Grievances } from '../../class/grievances';
import { GrievanceService } from '../../service/grivence.service.service';

@Component({
  selector: 'app-update-grevances',
  templateUrl: './update-grevances.component.html',
  styleUrls: ['./update-grevances.component.css'],
})
export class UpdateGrevancesComponent implements OnInit {
  farmer: Farmer = new Farmer(0, '', '', '');
  complaintId!: number;
  grievance: Grievances = new Grievances(0, ' ', this.farmer);
  constructor(
    private grievanceService: GrievanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.complaintId = this.route.snapshot.params['complaintId'];

    this.grievanceService.getGrievanceById(this.complaintId).subscribe(
      (data) => {
        this.grievance = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.grievanceService
      .updateGrievance(this.complaintId, this.grievance)
      .subscribe(
        (data: any) => {
          this.goToGrievanceList();
        },
        (error: any) => console.log(error)
      );
  }
  goToGrievanceList() {
    this.router.navigate(['/grievances']);
  }
}

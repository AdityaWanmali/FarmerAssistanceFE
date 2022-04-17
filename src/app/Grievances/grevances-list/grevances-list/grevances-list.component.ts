import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from 'src/app/Farmer/Class/farmer';
import { Grievances } from '../../class/grievances';
import { GrievanceService } from '../../service/grivence.service.service';

@Component({
  selector: 'app-grevances-list',
  templateUrl: './grevances-list.component.html',
  styleUrls: ['./grevances-list.component.css'],
})
export class GrevancesListComponent implements OnInit {
  farmer: Farmer = new Farmer(0, ' ', ' ', '0');
  grievance: Grievances = new Grievances(0, ' ', this.farmer);

  constructor(
    private grievanceService: GrievanceService,
    private router: Router
  ) {}

  grievances: Grievances[] = [];
  nameSearch: string = '';

  ngOnInit(): void {
    this.getGrievances();
  }

  grievanceDetails(complaintId: number) {
    this.router.navigate(['grievance-details', complaintId]);
  }

  updateGrievance(complaintId: number): void {
    this.router.navigate(['update-grievance', complaintId]);
  }

  deleteGrievance(complaintId: number): void {
    this.grievanceService.deleteGrievance(complaintId).subscribe((data) => {
      console.log(data);
      this.getGrievances();
    });
  }
  private getGrievances() {
    this.grievanceService.getGrievanceList().subscribe((data) => {
      this.grievances = data;
    });
  }
}

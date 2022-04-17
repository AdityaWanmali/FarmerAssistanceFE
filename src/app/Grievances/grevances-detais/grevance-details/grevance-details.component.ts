import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Farmer } from 'src/app/Farmer/Class/farmer';
import { Grievances } from '../../class/grievances';
import { GrievanceService } from '../../service/grivence.service.service';

@Component({
  selector: 'app-grevance-details',
  templateUrl: './grevance-details.component.html',
  styleUrls: ['./grevance-details.component.css'],
})
export class GrevanceDetailsComponent implements OnInit {
  farmer: Farmer = new Farmer(0, ' ', ' ', '0');

  complaintId!: number;

  grievance: Grievances = new Grievances(0, ' ', this.farmer);

  constructor(
    private rout: ActivatedRoute,
    private grievanceService: GrievanceService
  ) {}

  ngOnInit(): void {
    this.complaintId = this.rout.snapshot.params['complaintId'];

    this.grievance = new Grievances(0, ' ', this.farmer);
    this.grievanceService
      .getGrievanceById(this.complaintId)
      .subscribe((data) => {
        this.grievance = data;
      });
  }
}

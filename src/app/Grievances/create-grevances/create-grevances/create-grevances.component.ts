import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from 'src/app/Farmer/Class/farmer';
import { Grievances } from '../../class/grievances';
import { GrievanceService } from '../../service/grivence.service.service';

@Component({
  selector: 'app-create-grevances',
  templateUrl: './create-grevances.component.html',
  styleUrls: ['./create-grevances.component.css'],
})
export class CreateGrevancesComponent implements OnInit {
  farmer: Farmer = new Farmer(0, '', '', '0');
  grievance: Grievances = new Grievances(0, '', this.farmer);
  constructor(
    private grievanceService: GrievanceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveGrievance() {
    this.grievanceService.createGrievance(this.grievance).subscribe(
      (data) => {
        console.log(data);
        this.goToGrievanceList();
      },
      (error) => console.log(error)
    );
  }

  goToGrievanceList(): void {
    this.router.navigate(['/grievances']);
  }

  onSubmit() {
    console.log(this.grievance);
    this.saveGrievance();
  }
}

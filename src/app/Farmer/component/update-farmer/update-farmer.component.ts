import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farmer } from '../../Class/farmer';
import { FarmerService } from '../../Service/farmer.service';

@Component({
  selector: 'app-update-farmer',
  templateUrl: './update-farmer.component.html',
  styleUrls: ['./update-farmer.component.css'],
})
export class UpdateFarmerComponent implements OnInit {
  farmer_id!: number;
  farmer: Farmer = new Farmer(0, ' ', ' ', ' ');
  constructor(
    private farmerService: FarmerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.farmer_id = this.route.snapshot.params['farmer_id'];

    this.farmerService.getFarmerById(this.farmer_id).subscribe(
      (data) => {
        this.farmer = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.farmerService.updateFarmer(this.farmer_id, this.farmer).subscribe(
      (data: any) => {
        alert('Farmer Updated successfully');
        this.goToFarmerList();
      },
      (error: any) => console.log(error)
    );
  }
  goToFarmerList() {
    this.router.navigate(['/farmers']);
  }
}

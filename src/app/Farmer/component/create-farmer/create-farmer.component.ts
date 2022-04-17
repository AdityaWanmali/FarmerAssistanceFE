import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../../Class/farmer';
import { FarmerService } from '../../Service/farmer.service';

@Component({
  selector: 'app-create-farmer',
  templateUrl: './create-farmer.component.html',
  styleUrls: ['./create-farmer.component.css'],
})
export class CreateFarmerComponent implements OnInit {
  farmer: Farmer = new Farmer(0, '', '', '');
  constructor(private farmerService: FarmerService, private router: Router) {}

  ngOnInit(): void {}

  saveFarmer() {
    this.farmerService.createFarmer(this.farmer).subscribe(
      (data) => {
        console.log(data);
        this.goToFarmerList();
      },
      (error) => console.log(error)
    );
  }

  goToFarmerList(): void {
    this.router.navigate(['/farmers']);
  }

  onSubmit() {
    console.log(this.farmer);
    alert('Farmer created successfully');
    this.saveFarmer();
  }
}

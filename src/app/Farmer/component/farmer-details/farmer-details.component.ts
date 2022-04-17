import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Farmer } from '../../Class/farmer';
import { FarmerService } from '../../Service/farmer.service';

@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.css'],
})
export class FarmerDetailsComponent implements OnInit {
  farmer_id!: number;
  farmer: Farmer = new Farmer(0, ' ', ' ', ' ');
  constructor(
    private rout: ActivatedRoute,
    private farmerService: FarmerService
  ) {}

  ngOnInit(): void {
    this.farmer_id = this.rout.snapshot.params['farmer_id'];

    this.farmer = new Farmer(0, ' ', ' ', ' ');
    this.farmerService.getFarmerById(this.farmer_id).subscribe((data) => {
      this.farmer = data;
    });
  }
}

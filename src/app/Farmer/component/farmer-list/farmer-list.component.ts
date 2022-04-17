import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../../Class/farmer';
import { FarmerService } from '../../Service/farmer.service';

@Component({
  selector: 'app-farmer-list',
  templateUrl: './farmer-list.component.html',
  styleUrls: ['./farmer-list.component.css'],
})
export class FarmerListComponent implements OnInit {
  constructor(private farmerService: FarmerService, private router: Router) {}

  farmers: Farmer[] = [];
  nameSearch: string = '';
  ngOnInit(): void {
    this.getFarmers();
  }
  farmerDetails(farmer_id: number) {
    this.router.navigate(['farmer-details', farmer_id]);
  }

  updateFarmer(farmer_id: number): void {
    this.router.navigate(['update-farmer', farmer_id]);
  }

  deleteFarmer(farmer_id: number): void {
    if (confirm('Do you want to delete this Farmer ?')) {
      alert('Farmer Deleted Successfully');
      this.farmerService.deleteFarmer(farmer_id).subscribe((data) => {
        console.log(data);
        this.getFarmers();
      });
    }
  }
  private getFarmers() {
    this.farmerService.getFarmerList().subscribe((data) => {
      this.farmers = data;
    });
  }
  public isCollapsed = false;
}

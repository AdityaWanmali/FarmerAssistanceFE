import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advertisement } from '../../Class/advertisement';
import { AdvertisementService } from '../../services/advertisement.service';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.css'],
})
export class AdvertisementListComponent implements OnInit {
  constructor(
    private advertisementService: AdvertisementService,
    private router: Router
  ) {}

  advertisements: Advertisement[] = [];
  nameSearch: string = '';

  ngOnInit(): void {
    this.getAdvertisements();
  }

  advertisementDetails(addId: number) {
    this.router.navigate(['advertisement-details', addId]);
  }

  /*  updateAdvertisement(addId: number): void {
    this.router.navigate(['update-advertisement', addId]);
  } */

  /* deleteAdvertisement(addId: number): void {
    if (confirm('Do you want to delete this Farmer ?')){
      alert('Farmer Deleted Successfully');
    this.advertisementService.deleteAdvertisement(addId).subscribe((data) => {
      console.log(data);
      this.getAdvertisements();
    });
  }
  } */
  private getAdvertisements() {
    this.advertisementService.getAdvertisementList().subscribe((data) => {
      this.advertisements = data;
    });
  }
}

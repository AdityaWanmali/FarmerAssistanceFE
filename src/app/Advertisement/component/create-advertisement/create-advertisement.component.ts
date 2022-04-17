import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/Supplier/Class/supplier';
import { Advertisement } from '../../Class/advertisement';
import { AdvertisementService } from '../../services/advertisement.service';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css'],
})
export class CreateAdvertisementComponent implements OnInit {
  supplier: Supplier = new Supplier(0, '', '', '');
  advertisement: Advertisement = new Advertisement(0, '', this.supplier);
  constructor(
    private advertisementService: AdvertisementService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveAdvertisement() {
    this.advertisementService.createAdvertisement(this.advertisement).subscribe(
      (data) => {
        console.log(data);
        this.goToAdvertisementList();
      },
      (error) => console.log(error)
    );
  }

  goToAdvertisementList(): void {
    this.router.navigate(['/advertisements']);
  }

  onSubmit() {
    console.log(this.advertisement);
    alert('Advertisement created successfully');
    this.saveAdvertisement();
  }
}

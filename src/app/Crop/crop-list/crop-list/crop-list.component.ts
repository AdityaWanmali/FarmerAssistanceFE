import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crop } from '../../class/crop';
import { CropService } from '../../service/crop.service';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.css'],
})
export class CropListComponent implements OnInit {
  constructor(private cropService: CropService, private router: Router) {}

  crops: Crop[] = [];
  nameSearch: string = '';

  ngOnInit(): void {
    this.getCrops();
  }

  cropDetails(cropid: number) {
    this.router.navigate(['crop-details', cropid]);
  }

  updateCrop(cropid: number): void {
    this.router.navigate(['update-crop', cropid]);
  }

  deleteCrop(cropid: number): void {
    if (confirm('Do you want to delete this Crop?')) {
      alert('Crop Deleted Successfully');
      this.cropService.deleteCrop(cropid).subscribe((data) => {
        console.log(data);
        this.getCrops();
      });
    }
  }
  getCrops() {
    this.cropService.getCropList().subscribe((data) => {
      this.crops = data;
    });
  }
}

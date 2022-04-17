import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crop } from '../../class/crop';
import { CropService } from '../../service/crop.service';

@Component({
  selector: 'app-create-crop',
  templateUrl: './create-crop.component.html',
  styleUrls: ['./create-crop.component.css'],
})
export class CreateCropComponent implements OnInit {
  crop: Crop = new Crop(0, '', 0, 0);
  constructor(private cropService: CropService, private router: Router) {}

  ngOnInit(): void {}

  saveCrop() {
    this.cropService.createCrop(this.crop).subscribe(
      (data) => {
        console.log(data);
        this.goToCropList();
      },
      (error) => console.log(error)
    );
  }

  goToCropList(): void {
    this.router.navigate(['/crops']);
  }

  onSubmit() {
    console.log(this.crop);
    alert('Crop created successfully');
    this.saveCrop();
  }
}

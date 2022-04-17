import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crop } from '../../class/crop';
import { CropService } from '../../service/crop.service';

@Component({
  selector: 'app-update-crop',
  templateUrl: './update-crop.component.html',
  styleUrls: ['./update-crop.component.css'],
})
export class UpdateCropComponent implements OnInit {
  cropid!: number;
  crop: Crop = new Crop(0, ' ', 0, 0);
  constructor(
    private cropService: CropService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cropid = this.route.snapshot.params['cropid'];

    this.cropService.getCropById(this.cropid).subscribe(
      (data) => {
        this.crop = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.cropService.updateCrop(this.cropid, this.crop).subscribe(
      (data: any) => {
        alert('Crop created successfully');
        this.goToCropList();
      },
      (error: any) => console.log(error)
    );
  }
  goToCropList() {
    this.router.navigate(['/crops']);
  }
}

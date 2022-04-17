import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crop } from '../../class/crop';
import { CropService } from '../../service/crop.service';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css'],
})
export class CropDetailsComponent implements OnInit {
  cropid: number = 0;
  crop: Crop = new Crop(0, '', 0, 0);

  constructor(private rout: ActivatedRoute, private cropService: CropService) {}

  ngOnInit(): void {
    this.cropid = this.rout.snapshot.params['crop_id'];

    this.crop = new Crop(0, '', 0, 0);
    this.cropService.getCropById(this.cropid).subscribe((data) => {
      this.crop = data;
    });
  }
}

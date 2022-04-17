export class Crop {
  cropid: number;
  cropname: string;
  cropquantity: number;
  cropprice: number;

  constructor(
    cropid: number,
    cropname: string,
    cropquantity: number,
    cropprice: number
  ) {
    this.cropid = cropid;
    this.cropname = cropname;
    this.cropquantity = cropquantity;
    this.cropprice = cropprice;
  }
}

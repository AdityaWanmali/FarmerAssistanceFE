import { Supplier } from 'src/app/Supplier/Class/supplier';

export class Advertisement {
  constructor(
    public addId: number,
    public adver: string,
    public supplier: Supplier
  ) {}
}

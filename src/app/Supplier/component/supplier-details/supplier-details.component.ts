import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from '../../Class/supplier';
import { SupplierService } from '../../Service/supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css'],
})
export class SupplierDetailsComponent implements OnInit {
  supplierId!: number;
  supplier: Supplier = new Supplier(0, ' ', ' ', ' ');

  constructor(
    private rout: ActivatedRoute,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    this.supplierId = this.rout.snapshot.params['supplierId'];

    this.supplier = new Supplier(0, ' ', ' ', ' ');
    this.supplierService.getSupplierById(this.supplierId).subscribe((data) => {
      this.supplier = data;
    });
  }
}

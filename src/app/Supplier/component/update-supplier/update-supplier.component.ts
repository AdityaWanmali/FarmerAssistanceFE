import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../../Class/supplier';
import { SupplierService } from '../../Service/supplier.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css'],
})
export class UpdateSupplierComponent implements OnInit {
  supplierId!: number;
  supplier: Supplier = new Supplier(0, ' ', ' ', ' ');
  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.supplierId = this.route.snapshot.params['supplierId'];

    this.supplierService.getSupplierById(this.supplierId).subscribe(
      (data) => {
        this.supplier = data;
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.supplierService
      .updateSupplier(this.supplierId, this.supplier)
      .subscribe(
        (data: any) => {
          alert('Employee Updated Successfully');
          this.goToSupplierList();
        },
        (error: any) => console.log(error)
      );
  }
  goToSupplierList() {
    this.router.navigate(['/suppliers']);
  }
}

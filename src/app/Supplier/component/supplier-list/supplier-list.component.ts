import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../../Class/supplier';
import { SupplierService } from '../../Service/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
})
export class SupplierListComponent implements OnInit {
  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  suppliers: Supplier[] = [];
  nameSearch: string = '';

  ngOnInit(): void {
    this.getSuppliers();
  }
  supplierDetails(supplierId: number) {
    this.router.navigate(['supplier-details', supplierId]);
  }

  updateSupplier(supplierId: number): void {
    this.router.navigate(['update-supplier', supplierId]);
  }

  deleteSupplier(supplierId: number): void {
    if (confirm('Do you want to delete this Supplier ?')) {
      alert('Supplier Deleted Successfully');
      this.supplierService.deleteSupplier(supplierId).subscribe((data) => {
        console.log(data);
        this.getSuppliers();
      });
    }
  }
  private getSuppliers() {
    this.supplierService.getSUpplierList().subscribe((data) => {
      this.suppliers = data;
    });
  }

  public isCollapsed = false;

  
}

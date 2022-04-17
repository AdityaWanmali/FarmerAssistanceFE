import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './AboutUs/aboutus/aboutus.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';

import { AdminDetailsComponent } from './Admin/component/admin-details/admin-details.component';
import { AdminListComponent } from './Admin/component/admin-list/admin-list.component';
import { CreateAdminComponent } from './Admin/component/create-admin/create-admin.component';
import { AdvertisementListComponent } from './Advertisement/component/advertisement-list/advertisement-list.component';
import { CreateAdvertisementComponent } from './Advertisement/component/create-advertisement/create-advertisement.component';
import { ContactusComponent } from './ContactUs/contactus/contactus.component';
import { CreateCropComponent } from './Crop/create-crop/create-crop/create-crop.component';
import { CropDetailsComponent } from './Crop/crop-details/crop-details/crop-details.component';
import { CropListComponent } from './Crop/crop-list/crop-list/crop-list.component';
import { UpdateCropComponent } from './Crop/update-crop/update-crop/update-crop.component';
import { CreateFarmerComponent } from './Farmer/component/create-farmer/create-farmer.component';
import { FarmerDetailsComponent } from './Farmer/component/farmer-details/farmer-details.component';
import { FarmerListComponent } from './Farmer/component/farmer-list/farmer-list.component';
import { UpdateFarmerComponent } from './Farmer/component/update-farmer/update-farmer.component';
import { CreateGrevancesComponent } from './Grievances/create-grevances/create-grevances/create-grevances.component';
import { GrevanceDetailsComponent } from './Grievances/grevances-detais/grevance-details/grevance-details.component';
import { GrevancesListComponent } from './Grievances/grevances-list/grevances-list/grevances-list.component';
import { LoginComponent } from './login/login/login.component';
import { StartComponent } from './StartPage/start/start.component';
import { CreateSupplierComponent } from './Supplier/component/create-supplier/create-supplier.component';
import { SupplierDetailsComponent } from './Supplier/component/supplier-details/supplier-details.component';
import { SupplierListComponent } from './Supplier/component/supplier-list/supplier-list.component';
import { UpdateSupplierComponent } from './Supplier/component/update-supplier/update-supplier.component';
import { TempdashboardComponent } from './TempDashboard/tempdashboard/tempdashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'tempdashboard', component: TempdashboardComponent },
  { path: 'start', component: StartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-nav', component: AdminNavComponent },
  { path: 'advertisements', component: AdvertisementListComponent },
  { path: 'suppliers', component: SupplierListComponent },
  { path: 'create-supplier', component: CreateSupplierComponent },
  { path: 'update-supplier/:supplierId', component: UpdateSupplierComponent },
  { path: 'supplier-details/:supplierId', component: SupplierDetailsComponent },
  /* { path: '', redirectTo: 'suppliers', pathMatch: 'full' },*/
  { path: 'farmers', component: FarmerListComponent },
  { path: 'create-farmer', component: CreateFarmerComponent },
  { path: 'update-farmer/:farmer_id', component: UpdateFarmerComponent },
  { path: 'farmer-details/:farmer_id', component: FarmerDetailsComponent },
  /* { path: '', redirectTo: 'farmers', pathMatch: 'full' },*/
  { path: 'admins', component: AdminListComponent },
  { path: 'create-admin', component: CreateAdminComponent },
  { path: 'update-admin/:adminId', component: CreateAdminComponent },
  { path: 'admin-details/:adminId', component: AdminDetailsComponent },
  /* { path: '', redirectTo: 'admins', pathMatch: 'full' },*/

  { path: 'create-advertisement', component: CreateAdvertisementComponent },
  /* { path: 'update-advertisement/:farmer_id', component: UpdateFarmerComponent }, */

  /*{ path: '', redirectTo: 'advertisements', pathMatch: 'full' },*/
  { path: 'grievances', component: GrevancesListComponent },
  { path: 'create-grievance', component: CreateGrevancesComponent },
  {
    path: 'update-grievance/:complaintId',
    component: CreateGrevancesComponent,
  },
  {
    path: 'grievance-details/:complaintId',
    component: GrevanceDetailsComponent,
  },
  /* { path: '', redirectTo: 'grievances', pathMatch: 'full' },*/
  { path: 'crops', component: CropListComponent },
  { path: 'create-crop', component: CreateCropComponent },
  { path: 'update-crop/:cropid', component: UpdateCropComponent },
  { path: 'crop-details/:cropid', component: CropDetailsComponent },
  { path: '', redirectTo: 'crops', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

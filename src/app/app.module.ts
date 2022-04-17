import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierListComponent } from './Supplier/component/supplier-list/supplier-list.component';
import { CreateSupplierComponent } from './Supplier/component/create-supplier/create-supplier.component';
import { UpdateSupplierComponent } from './Supplier/component/update-supplier/update-supplier.component';
import { SupplierDetailsComponent } from './Supplier/component/supplier-details/supplier-details.component';
import { CollapseSearchComponent } from './collapse-search/collapse-search.component';
/* import { SupplierComponent } from './Supplier/Service/supplier/supplier.component'; */
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateFarmerComponent } from './Farmer/component/create-farmer/create-farmer.component';
import { FarmerDetailsComponent } from './Farmer/component/farmer-details/farmer-details.component';
import { FarmerListComponent } from './Farmer/component/farmer-list/farmer-list.component';
import { UpdateFarmerComponent } from './Farmer/component/update-farmer/update-farmer.component';
import { AdminDetailsComponent } from './Admin/component/admin-details/admin-details.component';
import { AdminListComponent } from './Admin/component/admin-list/admin-list.component';
import { CreateAdminComponent } from './Admin/component/create-admin/create-admin.component';
import { UpdateComponentComponent } from './Admin/component/update-component/update-component.component';
import { AdvertisementListComponent } from './Advertisement/component/advertisement-list/advertisement-list.component';
import { CreateAdvertisementComponent } from './Advertisement/component/create-advertisement/create-advertisement.component';
import { UpdateAdvertisementComponent } from './Advertisement/component/update-advertisement/update-advertisement.component';
import { StartComponent } from './StartPage/start/start.component';
import { LoginComponent } from './login/login/login.component';
import { TempdashboardComponent } from './TempDashboard/tempdashboard/tempdashboard.component';
import { SupplierNavComponent } from './supplier-nav/supplier-nav.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { FarmerNavComponent } from './farmer-nav/farmer-nav.component';
import { CreateGrevancesComponent } from './Grievances/create-grevances/create-grevances/create-grevances.component';
import { GrevanceDetailsComponent } from './Grievances/grevances-detais/grevance-details/grevance-details.component';
import { GrevancesListComponent } from './Grievances/grevances-list/grevances-list/grevances-list.component';
import { UpdateGrevancesComponent } from './Grievances/update-grevances/update-grevances/update-grevances.component';
import { CreateCropComponent } from './Crop/create-crop/create-crop/create-crop.component';
import { CropDetailsComponent } from './Crop/crop-details/crop-details/crop-details.component';
import { CropListComponent } from './Crop/crop-list/crop-list/crop-list.component';
import { UpdateCropComponent } from './Crop/update-crop/update-crop/update-crop.component';
import { AboutusComponent } from './AboutUs/aboutus/aboutus.component';
import { ContactusComponent } from './ContactUs/contactus/contactus.component';
@NgModule({
  declarations: [
    AppComponent,
    SupplierListComponent,
    CreateSupplierComponent,
    UpdateSupplierComponent,
    SupplierDetailsComponent,
    CollapseSearchComponent,
    FilterPipe,
    CreateFarmerComponent,
    FarmerDetailsComponent,
    FarmerListComponent,
    UpdateFarmerComponent,
    AdminDetailsComponent,
    AdminListComponent,
    CreateAdminComponent,
    UpdateComponentComponent,
    AdvertisementListComponent,
    CreateAdvertisementComponent,
    UpdateAdvertisementComponent,
    StartComponent,
    LoginComponent,
    TempdashboardComponent,
    SupplierNavComponent,
    AdminNavComponent,
    FarmerNavComponent,
    CreateGrevancesComponent,
    GrevanceDetailsComponent,
    GrevancesListComponent,
    UpdateGrevancesComponent,
    CreateCropComponent,
    CropDetailsComponent,
    CropListComponent,
    UpdateCropComponent,
    AboutusComponent,
    ContactusComponent,
    /* SupplierComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

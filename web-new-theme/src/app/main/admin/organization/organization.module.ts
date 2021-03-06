import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'general-information',
    loadChildren: () => import('./general-information/general-information.module').then(m => m.GeneralInformationModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'cost-centers',
    loadChildren: () => import('./cost-centers/cost-centers.module').then(m => m.CostCentersModule)
  },
  {
    path: 'process-eeo-filling',
    loadChildren: () => import('./process-eeo-filling/process-eeo-filling.module').then(m => m.ProcessEeoFillingModule)
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrganizationModule { }

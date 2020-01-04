import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { OrganizationService } from "./organization.service";
import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GeneralInfoComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers:[OrganizationService]
})
export class OrganizationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { Routes, RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { HeaderModule } from 'app/main/header/header.module';

const routes: Routes = [
  {
    path: '**',
    component: EducationComponent
  }
];

@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    CommonModule,
    FuseSharedModule,
    HeaderModule,
    RouterModule.forChild(routes),
  ]
})
export class EducationModule { }

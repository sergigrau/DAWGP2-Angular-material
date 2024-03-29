/*
 * Mòdul d'encaminament
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Mòdul d'encaminament
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { M01_SalutacioComponent } from './m01-salutacio.component';
import { M02_SumaComponent } from './m02-suma.component';
import { M03_IteradorComponent } from './m03-iterador-taula.component';
import {M15_PrimeraComponent} from './m15-primera.component'
import {M15_SegonaComponent} from './m15-segona.component'

const encaminaments: Routes = [
  { path: '', redirectTo: '/salutacio', pathMatch: 'full' },
  { path: 'salutacio', component: M01_SalutacioComponent },
  { path: 'suma', component: M02_SumaComponent },
  { path: 'llista', component: M03_IteradorComponent },
  { path: 'primera', component: M15_PrimeraComponent },
  { path: 'segona', component: M15_SegonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(encaminaments)],
  exports: [RouterModule]
})
export class AppEncaminamentModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  } from "@angular/router";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './calculos/suma/suma.component';
import { RestaComponent } from './calculos/resta/resta.component';

import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './podruct/product-list/product-list.component';
import { ProductoFilterPipe } from './podruct/producto-filter.pipe';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [AppComponent, SumaComponent, RestaComponent, ProductListComponent, ProductoFilterPipe, MenuComponent, TablaComponent, VistaComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule,MatButtonModule,MatIconModule,MatToolbarModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

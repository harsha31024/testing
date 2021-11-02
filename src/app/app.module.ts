import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShoppingService } from './shopping.service';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ViewproductsByCategoryComponent } from './viewproducts-by-category/viewproducts-by-category.component';
import { DropdownComponent } from './dropdown/dropdown.component';

import { ImgMagnifier } from "ng-img-magnifier";
import { GitComponent } from './git/git.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewAllProductsComponent,
    SingleProductComponent,
    ViewproductsByCategoryComponent,
    DropdownComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ImgMagnifier,
    ToastrModule.forRoot({
      timeOut:1600,
      progressBar: true,
      progressAnimation:'increasing',
      preventDuplicates: true
    })
  ],
  providers: [ShoppingService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }

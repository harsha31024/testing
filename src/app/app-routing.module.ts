import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewAllProductsComponent} from './view-all-products/view-all-products.component';
import { CactivateGuard} from './cactivate.guard';
import { SingleProductComponent} from './single-product/single-product.component';
import { ViewproductsByCategoryComponent } from './viewproducts-by-category/viewproducts-by-category.component';


const routes: Routes = [
  { path: "",component:LoginComponent},
  { path:"products",component:ViewAllProductsComponent,canActivate:[CactivateGuard]},
  { path: "login", component: LoginComponent},
  { path: "products/:id", component:SingleProductComponent},
  { path: "products/category/:id",component:ViewproductsByCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

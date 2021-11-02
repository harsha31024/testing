import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }
  
  ValidateUser(username:any,password:any){
    if(username == "harsha" && password == "harsha")
    return true;
    else
    return false;

  }
  getProducts(){
    const url = "products"
    return this.http.get(this.apiUrl+(url));
  }
  getProductById(Pid:any){
    const url= "products/"+Pid;
    return this.http.get(this.apiUrl+(url));
  }
  getCategories(){
    const url="products/categories";
    return this.http.get(this.apiUrl+(url));
  }

  // getCategories(){
  //   const url="https://fakestoreapi.com/products/categories";
  //   return this.http.get(this.apiUrl+(url));
  // }
  // getProductsByCategory(catId:any){
  //   const url="products/?Categoryid="+catId;
  //   return this.http.get(this.apiUrl+(url))

  // }
  getProductsByCategory(catId:any){
    const url="products?Categoryid="+catId;
    return this.http.get(this.apiUrl+(url))

  }
}

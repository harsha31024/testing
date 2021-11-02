import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingService} from '../shopping.service';
import { environment } from 'src/environments/environment';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productData:any = [];
  categories:any=[0];

  // categoryId:any=[];
  // categoryInfo:any=[];

  titleSearch:any;

  imageUrl=`${environment.apiUrl}`;
  image=this.imageUrl + 'img/';

  constructor(public router:Router, private shopSrvc: ShoppingService) { }

  ngOnInit(): void {
    console.log('jjj');
    this.getProductData();
    // this.getCatProduct();
    this.getCategorylist();
  }
  LogoutUser(){
    localStorage.clear();
    this.router.navigate(["login"]);
  }

  getProductData(){
    this.shopSrvc.getProducts().subscribe((res:any)=>{
      console.log(res);
      this.productData = res;
      console.log('prod data', this.productData)
    })
  }
  Search(){
    if(this.titleSearch!=""){

      this.productData=this.productData.filter((res:any)=>{
        return res.title.toLocaleLowerCase().match(this.titleSearch.toLocaleLowerCase());
     })
  

    }
    else if(this.titleSearch==""){
      this.ngOnInit();
    }
  

}
getCategorylist(){
  
  this.shopSrvc.getCategories().subscribe(data=>{
    this.categories=data;
    console.log("cat list",this.categories);
    
  })
}
 

}

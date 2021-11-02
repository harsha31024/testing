import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from 'src/app/shopping.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viewproducts-by-category',
  templateUrl: './viewproducts-by-category.component.html',
  styleUrls: ['./viewproducts-by-category.component.css']
})
export class ViewproductsByCategoryComponent implements OnInit {
  categoryId:any=[];
  ProductList:any=[];
  categories:any=[];

  imageUrl=`${environment.apiUrl}`;
  image=this.imageUrl + 'img/';

  constructor(private _actroute: ActivatedRoute, private catSrvc: ShoppingService) { }

  ngOnInit(): void {
    this.getProductCat();
    
  }

  getProductCat(){
    this._actroute.params.subscribe(data=>{
      this.categoryId[0]=data.categories;
      console.log(this.categoryId);
    });
    // console.log(this.categoryId);
    this.catSrvc.getProductsByCategory(this.categoryId).subscribe(plist=>{
      this.ProductList[0]=plist;
      console.log('list',this.ProductList);
      console.log('cat list',plist);
      
      
    })
  }

}

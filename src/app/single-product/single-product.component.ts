
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from 'src/app/shopping.service';
import { environment } from 'src/environments/environment';
import { NgxImgZoomService } from "ngx-img-zoom";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  productId: any = [];
  productInfo: any = [];

  public imagePath:any;
  
  public message:any;

  enableZoom: boolean = true;
  previewImageSrc: any;
  zoomImageSrc: any;

  imageUrl=`${environment.apiUrl}`;
  image=this.imageUrl + 'img/';

  constructor( private prodSrvc: ShoppingService,
     private _actroute:ActivatedRoute,
     private ngxImgZoom: NgxImgZoomService) {
      this.ngxImgZoom.setZoomBreakPoints([
        { w: 100, h: 100 },
        { w: 150, h: 150 },
        { w: 200, h: 200 },
        { w: 250, h: 250 },
        { w: 300, h: 300 }
      ]);
      }

  ngOnInit(): void {
    this.getSingleProduct()
  }
  getSingleProduct(){
    this._actroute.params.subscribe(data=>{
      console.log(data)
      this.productId=data.id;
    })

    this.prodSrvc.getProductById(this.productId).subscribe((res:any)=>{
      console.log(res);
      this.productInfo[0]=res;
    })

  }
}
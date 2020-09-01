import { Component, OnInit } from '@angular/core';
declare const changeImage:any;

declare const changeImage1:any;


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMouseHover(x:any){
          changeImage(x);
  }

  onMouseOut(x:any){

  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iproduct, ProductCatg } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productsData : Array<Iproduct>= [
    {
      pName : 'Iphone 16',
      pDescription : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati,
           eaque, nostrum ratione cupiditate modi corrupti quae dolor, saepe numquam repudiandae
           consequuntur laudantium illum suscipit atque veritatis! Dolor, rem quibusdam?`,
      pCatg : ProductCatg.CATLOG
    },
    {
      pName : 'Oppo A12',
      pDescription : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati,
           eaque, nostrum ratione cupiditate modi corrupti quae dolor, saepe numquam repudiandae
           consequuntur laudantium illum suscipit atque veritatis! Dolor, rem quibusdam?`,
      pCatg : ProductCatg.PRODUCT
    }
  ];
   
  constructor() { }
  ngOnInit(): void {
  }

  @ViewChild('pName') pName!:ElementRef;
  @ViewChild('pDescription') pDescription!:ElementRef;
  @ViewChild('pCatg') pCatg!:ElementRef;
  OnAddData(){
    if(
      this.pName.nativeElement.value === ''||
      this.pDescription.nativeElement.value === ''||
      this.pCatg.nativeElement.value === ''
    ){
      alert(`Please fill all the fields`);
      return;
    }
  let newObj : Iproduct = {
    pName : this.pName.nativeElement.value,
    pDescription : this.pDescription.nativeElement.value,
    pCatg : this.pCatg.nativeElement.value 
  }

   this.productsData.unshift(newObj);
   
   this.pName.nativeElement.value='';
   this.pDescription.nativeElement.value='';
   this.pCatg.nativeElement.value='';

  }
}

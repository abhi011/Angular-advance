import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  recipeForm: string;

  
  constructor() { }

  @ViewChild('f')htmlFormElement:NgForm;
  ngOnInit(): void {
  }

  onSubmit(htmlFormElement:NgForm){
    console.log(htmlFormElement);

//     dsc: null
// img: null
// name: null
// price: null
// pwd: null
// sel1: null
// sel2: null
    console.log("submitted");
    localStorage.setItem("Name",htmlFormElement.value.name);
    localStorage.setItem("Description",htmlFormElement.value.dsc);
    localStorage.setItem("Price",htmlFormElement.value.price);
    
    localStorage.setItem("category",htmlFormElement.value.category);
    localStorage.setItem("select",htmlFormElement.value.select);
    
    // htmlFormElement.reset();
    
    

  }
  ngSubmit(){
    console.log("this si recipe form " +this.recipeForm)
}

onReset(){
  this.htmlFormElement.reset();
}

}

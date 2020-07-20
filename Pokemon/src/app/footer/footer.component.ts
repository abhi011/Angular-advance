import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
preBtn:boolean;
@ViewChild('next') next:ElementRef;
@ViewChild('pre') pre:ElementRef;
next1:any;
pre1:any


  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // if(this.userService.offSeetCount==0)
    this.preBtn=false;
    this.next1=document.querySelector('.next');
    this.pre1=document.querySelector('.pre');
    

  

  }

  


  // nextData(){
  //   this.userService.getPokemon().subscribe(data=>{
  //     console.log("data "+data.next);
      
  //     this.userService.state.nextUrl=data.next;
  //     this.userService.state.preUrl=data.previous;
  //     console.log(`${this.userService.state.nextUrl} and ${this.userService.state.preUrl}`); 
      
  //   })


  //   console.log(`${this.userService.state.nextUrl} and ${this.userService.state.preUrl}`);
      

  //   if(this.next1.value=='next'){
  //     this.userService.state.nextBtn=true;
  //     console.log(this.userService.state.nextBtn)
  //   }
  //     if(this.pre1.value=='pre'){
  //     this.userService.state.preBtn=true;
  //     console.log(this.userService.state.nextBtn)  
  //   }
  //   if(this.userService.state.preUrl==null)
  //     this.preBtn=false;

  //     this.userService.shopping.emit();
      
  // }


}

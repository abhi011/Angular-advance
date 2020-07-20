import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component'

const appRoutes:Routes=[
  {path:'', redirectTo:'/home' ,pathMatch:'full'},
  {path:'home', component:HomeComponent},
    // children:[ {path:'',component:DetailComponent},
    //  {path:':id', component:DetailComponent}]},

  {path:'details/:id', component:DetailComponent},
  {path:'createProduct', component:CreateProductComponent},
  {path:'productList', component:ProductListComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    CreateProductComponent,
    ProductListComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

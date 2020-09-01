import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



const routes: Routes = [
  {path: '',component: HomepageComponent},
  {path: 'login',component: LoginComponent},
  {path: 'registration',component: RegistrationComponent},
  {path: 'my-cart',component: MyCartComponent},
  {path: 'product-details',component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

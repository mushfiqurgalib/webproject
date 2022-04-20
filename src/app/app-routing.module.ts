import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { SignUpformComponent } from './sign-upform/sign-upform.component';

const routes: Routes = [
  {path:'',component:LaptopComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

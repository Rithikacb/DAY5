import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"product",component:ProductComponent},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"product/:id",component:SingleComponent},
    {path:"contact",component:ContactComponent},
    {path:"profile",component:ProfileComponent}
];

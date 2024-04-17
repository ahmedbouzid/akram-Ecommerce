import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { AdminAuthGuardLogin, AdminAuthGuardService } from '../shared/services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// admin routes
const routes:Routes = [
  {path:'admin-login' ,canActivate:[AdminAuthGuardLogin], component:LoginComponent},
  {path:'admin-dashboard'  ,canActivate:[AdminAuthGuardService], component:AdminDashboardComponent},
  {path:'admin-user'  ,canActivate:[AdminAuthGuardService], component:UserCrudComponent},
  {path:'product'  ,canActivate:[AdminAuthGuardService], component:ProductComponent},
]

@NgModule({
  declarations: [
    AdminDashboardComponent,
    LoginComponent,
    UserCrudComponent
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes) ,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./services/auth.guard";
import {AuthOwnerGuard} from "./services/auth-owner.guard";



//------------------------------
const routes: Routes = [

  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  
  { path: 'owner', loadChildren: () => import('./pages/owner/owner.module').then(m => m.OwnerModule) },
  

  { path: 'Sidenav', loadChildren: () => import('./sidenavs/sidenav/sidenav.module').then(m => m.SidenavModule) },

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'Header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },

  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: 'Owner', loadChildren: () => import('./pages/owner/owner.module').then(m => m.OwnerModule) },

  { path: 'SidenavOwner', loadChildren: () => import('./sidenavs/sidenav-owner/sidenav-owner.module').then(m => m.SidenavOwnerModule) },

  

  

  

  

  // { path: 'student', loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule) },

  



  

  { path: 'Top', loadChildren: () => import('./home/top/top.module').then(m => m.TopModule) },

  




  // { path: 'CourseContentHome', loadChildren: () => import('./pages/course-content/course-content-home/course-content-home.module').then(m => m.CourseContentHomeModule) },

];



@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

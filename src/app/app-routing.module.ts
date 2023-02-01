import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './Authentication/authentication.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'' , component:AuthenticationComponent},
  {path:'home-page' , component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "auth", component: AuthComponent, children: [
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "", redirectTo: "login", pathMatch: 'full'},
    { path: "**", redirectTo: "login", pathMatch: 'full'},
  ] },
  { path: "**", redirectTo: "", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

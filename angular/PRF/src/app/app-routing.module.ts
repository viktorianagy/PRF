import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
//import { FirstComponent } from './first/first.component';
import { FizetesComponent } from './fizetes/fizetes.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
//import { SecondComponent } from './second/second.component';
import { TermekekComponent } from './termekek/termekek.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
// {path: 'first', component: FirstComponent},
//{path: 'second/:id', component: SecondComponent},
  {path: 'login', component: LoginComponent},
  {path: 'termekek', component: TermekekComponent, canActivate: [AuthGuard]},
  {path: 'fizetes/:id', component: FizetesComponent, canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

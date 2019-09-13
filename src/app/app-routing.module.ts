import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HelpComponent} from './help/help.component';
import {LoggedInGuard} from "./logged-in.guard";
import {ProtectedComponent} from "./protected/protected.component";
import {NavComponent} from "./nav/nav.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent},
  {path: 'nav', component: NavComponent},
  { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

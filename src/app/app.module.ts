import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { AUTH_PROVIDERS} from './auth.service';
import { LoggedInGuard} from './logged-in.guard';
import { ProtectedComponent } from './protected/protected.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    AboutComponent,
    NavComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ AUTH_PROVIDERS, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

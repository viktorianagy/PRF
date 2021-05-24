import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FirstComponent } from './first/first.component';
//import { SecondComponent } from './second/second.component';
import { ErrorComponent } from './error/error.component';
import { TermekekComponent } from './termekek/termekek.component';
import { FizetesComponent } from './fizetes/fizetes.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    //FirstComponent,
    //SecondComponent,
    ErrorComponent,
    TermekekComponent,
    FizetesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';

// const routes: Routes = [
//   {path: 'home', component: HomeComponent},
//   {path:'',redirectTo: '/home',pathMatch: 'full'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatToolbarModule
  ],
  exports: [
    RouterModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }

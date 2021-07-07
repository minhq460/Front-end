
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NewsService } from './service/news.service';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedPostComponent } from './categories/featured-post/featured-post.component';
import { LatestPostsComponent } from './categories/latest-posts/latest-posts.component';
import { PopularNewsComponent } from './categories/popular-news/popular-news.component';
import { TopNewsComponent } from './categories/top-news/top-news.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NavService } from './service/nav.service';
import { SidebarComponent } from './header/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    SinglePostComponent,
    SidebarComponent,
    CategoriesComponent,
    FeaturedPostComponent,
    LatestPostsComponent,
    PopularNewsComponent,
    TopNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    NgxPaginationModule
  ],
  providers: [NavService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }




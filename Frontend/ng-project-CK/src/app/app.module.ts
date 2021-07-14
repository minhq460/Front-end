
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
import { AboutComponent } from './about/about.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NavService } from './service/nav.service';
import { SidebarComponent } from './header/sidebar/sidebar.component';
import { MainSmallComponent } from './home/main-top/main-small/main-small.component';
import { MainBigComponent } from './home/main-top/main-big/main-big.component';
import { HotNewsComponent } from './home/main-center/hot-news/hot-news.component';
import { VideoNewsComponent } from './home/video-news/video-news.component';
import { FastNewsComponent } from './home/main-bottom/fast-news/fast-news.component';
import { WorldNewsComponent } from './home/main-bottom/world-news/world-news.component';
import { PopularNewsComponent } from './home/main-center/popular-news/popular-news.component';
import { LatestPostCategoriesComponent } from './categories/latest-post-categories/latest-post-categories.component';
import { LatestPostsComponent } from './home/main-top/latest-posts/latest-posts.component';
import { RegisterComponent } from './header/register/register.component';
import { LoginComponent } from './header/login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StickyNavModule } from 'ng2-sticky-nav';

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
    MainBigComponent,
    MainSmallComponent,
    HotNewsComponent,
    VideoNewsComponent,
    FastNewsComponent,
    WorldNewsComponent,
    PopularNewsComponent,
    LatestPostsComponent,
    LatestPostCategoriesComponent,
    NoPageFoundComponent,
    ScrolltopComponent,
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
    NgxPaginationModule,
   	StickyNavModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NavService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }




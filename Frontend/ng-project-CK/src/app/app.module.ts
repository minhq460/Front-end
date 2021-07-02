
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SinglePostComponent } from './single-post/single-post.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavService } from './service/nav.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './service/news.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedPostComponent } from './categories/featured-post/featured-post.component';
import { LatestPostsComponent } from './categories/latest-posts/latest-posts.component';
import { PopularNewsComponent } from './categories/popular-news/popular-news.component';

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
    PopularNewsComponent
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
  ],
  providers: [NavService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }




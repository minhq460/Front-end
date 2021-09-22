import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ChangePasswordComponent } from './header/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // {path:"",component:HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'single-post', component: SinglePostComponent },
  { path: 'search', component: SearchComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: ':url', component: CategoriesComponent },
  {path:'**', component:NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

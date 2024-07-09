import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/pages/home/home.component';
import { AboutComponent } from './user/pages/about/about.component';
import { ServiceComponent } from './user/pages/service/service.component';
import { ProductComponent } from './user/pages/product/product.component';
import { ContactComponent } from './user/pages/contact/contact.component';
import { BlogComponent } from './user/pages/blog/blog.component';
import { ProductDetailComponent } from './user/pages/product/product-detail/product-detail.component';
import { BlogDetailComponent } from './user/pages/blog/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'product', component: ProductComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'product/product-detail', component: ProductDetailComponent },
  { path: 'blog/blog-detail', component: BlogDetailComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

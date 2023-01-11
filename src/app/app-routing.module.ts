import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
{
 path:'Home' , component:HomeComponent
},
{
  path:'' , redirectTo:'/Home' , pathMatch:'full'
},
{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) 
},
{
  path:'search/:query', component:SearchComponent 
     //  ....here the path is whats you want to search inside the path
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

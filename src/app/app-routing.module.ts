import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookViewComponent } from './book-view/book-view.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';




const routes: Routes = [{path:'home',component:HomeComponent},{path:'bookView/:id',component:BookViewComponent},
{path:'',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

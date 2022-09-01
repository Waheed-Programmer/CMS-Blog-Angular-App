import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from '../articles/article-details/article-details.component';
import { ArticleListComponent } from '../articles/article-list/article-list.component';

const routes: Routes = [

  {path:'article',component:ArticleListComponent},
{path:'article/:id',component:ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }

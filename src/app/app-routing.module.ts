import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopTracksPageComponent } from './components/top-tracks-page/top-tracks-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: TopTracksPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: '**',
    component: TopTracksPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

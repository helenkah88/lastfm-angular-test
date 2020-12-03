import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopTracksPageComponent } from './components/top-tracks-page/top-tracks-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchByTrackComponent } from './components/search-by-track/search-by-track.component';

import { ApiKeyInterceptor } from './shared/interceptors/api-key.interceptor';
import { TrackItemComponent } from './components/track-item/track-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopTracksPageComponent,
    SearchPageComponent,
    SearchByTrackComponent,
    TrackItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

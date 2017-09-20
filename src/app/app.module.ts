import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataService} from '../services/data.service';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelGridComponent } from './hotel-grid/hotel-grid.component';
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent,
    HotelGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

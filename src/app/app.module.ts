import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DialogButtonComponent,
    DialogComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule, MatDialogModule],

  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

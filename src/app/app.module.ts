import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManagerComponent } from "./manager/manager.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ManagerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TaskBarComponent } from './task-bar/task-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    TaskBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

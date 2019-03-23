import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    TaskBarComponent,
    FileExplorerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

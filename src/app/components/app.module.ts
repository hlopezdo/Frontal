import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TaskBarComponent } from './task-bar/task-bar.component';
import { WindowComponent } from './window/window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WindowHeaderComponent } from './window/window-header/window-header.component';
import { WindowBodyComponent } from './window/window-body/window-body.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    TaskBarComponent,
    WindowComponent,
    WindowHeaderComponent,
    WindowBodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

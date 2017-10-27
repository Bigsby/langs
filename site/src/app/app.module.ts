import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppRoutingModule, RoutedComponents } from './app-routing.module';
import { DataService } from "./services/data.service";
import { AppComponent } from './app.component';
import { UrlComponent } from "./common/url.component";
import { ProjectHeaderComponent } from './common/project-header.component';
import { CodeImplementationComponent } from './common/code-implementation.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents,
    UrlComponent,
    ProjectHeaderComponent,
    CodeImplementationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppRoutingModule, RoutedComponents } from './app-routing.module';
import { DataService } from "./services/data.service";
import { GoogleAnalyticsService } from "./services/google-analytics.service";
import { AppComponent } from './app.component';
import { UrlComponent } from "./common/url.component";
import { ProjectHeaderComponent } from './common/project-header.component';
import { CodeImplementationComponent } from './common/code-implementation.component';
import { StepsImplementationComponent } from './common/steps-implementation.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents,
    UrlComponent,
    ProjectHeaderComponent,
    CodeImplementationComponent,
    StepsImplementationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    GoogleAnalyticsService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
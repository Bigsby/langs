import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProjectComponent } from './project/project.component';
import { LanguageComponent } from "./language/language.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "project/:id",
    component: ProjectComponent
  },
  {
    path: "language/:id",
    component: LanguageComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [
  HomeComponent,
  ProjectComponent,
  LanguageComponent
]
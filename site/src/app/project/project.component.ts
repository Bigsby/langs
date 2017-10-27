import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { DataService } from "../services/data.service";
import { Project, Language } from "../services/models";

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project;
  languages: Language[];
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.getProject(this.route.snapshot.params["id"])
      .then(p => {
        this.project = p;
        if (!this.project)
          this.router.navigate(["/"]);
      }).then(()=>{
        if (!this.project)
          return;
        this.data.getLanguagesForProject(this.project)
          .then(ls => this.languages = ls);
      });
  }

  collapseAll(){
    this.languages.forEach(l => (<any>l).collapsed = true);
  }

  expandAll(){
    this.languages.forEach(l =>(<any>l).collapsed = false);
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { DataService } from "../services/data.service";
import { Language, Project } from "../services/models";

@Component({
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  language: Language;
  projects: Project[];
  constructor(private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.getLanguage(this.route.snapshot.params["id"])
      .then(l => {
        this.language = l;
        if (!this.language)
          this.router.navigate(["/"])
      }).then(() => {
        if (!this.language)
          return;

        this.data.getProjectsForLanguage(this.language.id)
          .then(ps => this.projects = ps);
      });
  }

  collapseAll(){
    this.projects.forEach(l => (<any>l).collapsed = true);
  }

  expandAll(){
    this.projects.forEach(l =>(<any>l).collapsed = false);
  }
}

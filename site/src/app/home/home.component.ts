import { Component, OnInit } from '@angular/core';

import { DataService } from "./../services/data.service";
import { Project, Language, Program } from "./../services/models";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[];
  languages: Language[];
  programs: Program[];
  constructor(private data: DataService) { 

  }

  ngOnInit() {
    this.data.getProjects()
      .then(data => this.projects = data);
    this.data.getLanguages()
      .then(data => this.languages = data);
    this.data.getPrograms()
      .then(data => this.programs = data);
  }
}
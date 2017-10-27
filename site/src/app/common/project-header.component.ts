import { Component, Input } from '@angular/core';

import { Project } from "./../services/models";

@Component({
  selector: 'project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss']
})
export class ProjectHeaderComponent {
  @Input("project") project: Project;
}

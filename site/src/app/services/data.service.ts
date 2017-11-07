import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Project, Language, Program, ProjpectImplementation, LanguageImplementation } from './models';

@Injectable()
export class DataService {

  constructor(private http: Http) { 
  }

  getProjects(): Promise<Project[]>{
    return this.http.get("data/projects.json")
      .toPromise()
      .then(response => (response.json() as Project[]).filter(p => p.show).sort((p1, p2) => p1.order - p2.order));
  }

  getProjectsForLanguage(languageId: string): Promise<Project[]>{
    return this.http.get("data/projects.json")
      .toPromise()
      .then(response => (response.json() as Project[]).filter(p => p.show && p.languages.includes(languageId)).sort((p1, p2) => p1.order - p2.order));
  }

  getProject(id: string): Promise<Project>{
    return this.getProjects().then(projects => projects.find(p => p.show && p.id === id));
  }

  getLanguages(): Promise<Language[]> {
    return this.http.get("data/languages.json")
      .toPromise()
      .then(response => (response.json() as Language[]).filter(l => l.show).sort((p1, p2) => p1.order - p2.order));
  }

  getLanguagesForProject(project: Project): Promise<Language[]>{
    return this.http.get("data/languages.json")
      .toPromise()
      .then(response => (response.json() as Language[]).filter(l => l.show && project.languages.includes(l.id)).sort((p1, p2) => p1.order - p2.order));
  }

  getLanguage(id: string): Promise<Language>{
    return this.getLanguages().then(languages => languages.find(l => l.show && l.id === id));
  }

  getPrograms(): Promise<Program[]>{
    return this.http.get("data/programs.json")
      .toPromise()
      .then(response => response.json() as Program[]);
  }

  getProjectImplementations(projectId: string): Promise<(LanguageImplementation | string)[]>{
    return this.http.get("data/implementations.json")
      .toPromise()
      .then(response =>  {
        let implementations = response.json() as ProjpectImplementation[];
        return implementations.find(i => i.projectId == projectId).languages;
      });
  }

  getLanguagesImplementations(languagesId: string): Promise<(LanguageImplementation | string)[]>{
    return this.http.get("data/implementaionts.json")
      .toPromise()
      .then(response => {
        let implementations = response.json() as ProjpectImplementation[];
        let result: (LanguageImplementation | string)[] = [];

        implementations.forEach(impelemntation =>{
          if (typeof impelemntation.languages[languagesId] === "string"){
            
          }
        });
        return result;
      });

  }
}

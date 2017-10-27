import { Component, Input, OnInit } from '@angular/core';
import { Http } from "@angular/http";
//declare var hljs: any;

import * as hljs from  "highlight.js/lib";
import "highlight.js/lib/languages/go";
import "highlight.js/lib/languages/fsharp";
import "highlight.js/lib/languages/powershell";
import "highlight.js/lib/languages/vbnet";
import "highlight.js/lib/languages/erlang";

import { Project, Language } from "../services/models";
const codeRoot = "https://github.com/Bigsby/HelloLanguages/blob/master/src/";
const codeRawRoot = "https://raw.githubusercontent.com/Bigsby/HelloLanguages/master/src/";

@Component({
  selector: 'code-implementation',
  templateUrl: './code-implementation.component.html',
  styleUrls: ['./code-implementation.component.scss']
})
export class CodeImplementationComponent implements OnInit {

  @Input() project: Project;
  @Input() language: Language;
  code: string;
  constructor(private http: Http) { 
  }
  
  ngOnInit(): void {
    this.http.get(codeRawRoot + this.language.id + "/" + this.project.id + "." + this.language.id)
      .toPromise()
      .then(response => 
        this.code = hljs.highlight(this.language.hljs, response.text(), true).value// Prism.highlight(response.text(), Prism.languages[this.language.hbuiljs])
      );
      
  }
}
import { Component, Input, OnInit } from '@angular/core';
import { Http } from "@angular/http";
//declare var hljs: any;

import * as hljs from "highlight.js/lib";
import "highlight.js/lib/languages/go";
import "highlight.js/lib/languages/fsharp";
import "highlight.js/lib/languages/powershell";
import "highlight.js/lib/languages/vbnet";
import "highlight.js/lib/languages/erlang";
import { Clipboard } from "./clipboard";

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
  @Input() extension: string;
  @Input() fileName: string;
  // @Input() notes: string[];
  code: string;
  codeUrl: string;
  hasNotes: boolean;
  
  private cleanCode: string;
  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.extension = this.extension || this.language.id;
    this.fileName = this.fileName || this.project.id;
    this.codeUrl = codeRoot + this.language.id + "/" + this.fileName + "." + this.extension;
    this.http.get(codeRawRoot + this.language.id + "/" + this.fileName + "." + this.extension)
      .toPromise()
      .then(response => {
        this.cleanCode = response.text();
        this.code = hljs.highlight(this.language.hljs, this.cleanCode, true).value;
        //this.notes = this.project.notes ? this.project.notes[this.language.id] : [];
      });
  }

  copy(){
    Clipboard.copy(this.cleanCode);
  }
}
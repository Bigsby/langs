import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'url',
  template: `
   <a target="_blank" href="{{href}}"><ng-content></ng-content></a>
  `,
  styles: []
})
export class UrlComponent implements OnInit {

  @Input("href") href: string;

  constructor() { }

  ngOnInit() {
  }
}
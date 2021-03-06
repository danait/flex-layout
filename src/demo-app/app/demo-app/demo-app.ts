import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  template: `
    <div fxLayout="column" class="bigger">
      <div fxLayout="row"
           fxLayoutAlign="start center"
           fxLayoutGap="20px"
           style="height:40px; min-height:40px;">
        <h2>Layout Demos: </h2>
        <button mat-raised-button color="primary" [routerLink]="['']">
          Static
        </button>
        <button mat-raised-button color="primary" [routerLink]="['responsive']"> Responsive
        </button>
        <button mat-raised-button color="primary" [routerLink]="['issues']"> Github</button>
        <button mat-raised-button color="primary" [routerLink]="['stackoverflow']"> StackOverflow
        </button>
      </div>
      <div fxFlex fxLayout="column"
           fxLayoutAlign="left top"
           style="font-size: 0.85em; margin-top: 10px; padding-bottom:20px; white-space:normal">
        These Layout demos are curated from the Angular Material v1.x documentation, GitHub Issues,
        StackOverflow,
        and CodePen.
        <span class="title" style="font-size: 0.7em; font-weight:normal;">
                Hint: Click on any of the samples below to toggle the layout direction(s).
              </span>
      </div>
    </div>

    <div class="demo-content">
      <router-outlet></router-outlet>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class DemoApp {
}

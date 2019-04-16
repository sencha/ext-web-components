declare var Ext: any
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [``],
  template: `
  
  <ext-grid fitToParent=true
    (ready)="readyGrid($event)">

   <!-- Titlebar starts-->
   <ext-titlebar docked="top" weight="10">
     <ext-button iconCls="x-fa fa-bars" onTap="main.toggleTree()"></ext-button>
     <span class="ext ext-sencha" style="margin: '0 5px 0 7px;'; font-size: '20px'; width: '20px'"></span>
     <span extjs href="#" class="app-title">Sencha Ext Web Components in Angular</span>
   </ext-titlebar>
   <!-- Titlebar ends-->

  </ext-grid>

  <ext-tabpanel 
    height="600px"
    [shadow]="true"
    [tabBar]="{layout: {pack: 'left'}}">
    <ext-panel *ngFor="let file of files" [hidden]="files.length > 0 ? false: true"
      layout="fit"
      height="600px"
      [scrollable]="true"
      [title]="file.name"
      [ui]="'code-panel'"
      tab="{ui: 'app-code-tab', flex: 0, minWidth: 120}"
      [userSelectable]="{element: true, bodyElement: true}"
      [html]="'file.code'">
      <ext-button text="tab detail"></ext-button>
    </ext-panel>
  </ext-tabpanel>

  `
})
export class AppComponent {

  //  <ext-button text="hi"></ext-button>

  files = [
    { name: 'tab 1', code: "123" },
    { name: 'tab 2', code: "123" },
    { name: 'tab 3', code: "123" }
  ]

  gridTitle = "my grid title"
    // [title]="gridTitle"


  readyGrid($event) {
    console.log($event)
  }

}

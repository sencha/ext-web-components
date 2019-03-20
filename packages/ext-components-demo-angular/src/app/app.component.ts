declare var Ext: any
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [``],
  template: `
  <ext-button text="hi"></ext-button>
  <ext-grid fitToParent=true
    [title]="gridTitle"
    (ready)="readyGrid($event)">

   <!-- Titlebar starts-->
   <ext-titlebar docked="top" weight="10">
     <ext-button iconCls="x-fa fa-bars" onTap="main.toggleTree()"></ext-button>
     <span class="ext ext-sencha" style="margin: '0 5px 0 7px;'; font-size: '20px'; width: '20px'"></span>
     <span extjs href="#" class="app-title">Sencha ExtComponents 7.0 Kitchen Sink</span>
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
    <ext-button text="hi"></ext-button>
  </ext-panel>
</ext-tabpanel>






  `
})
export class AppComponent {


  files = [
    { name: 'n', code: "123" },
    { name: 'n', code: "123" },
    { name: 'n', code: "123" }

  ]


  gridTitle = "my grid title"

  readyGrid($event) {
    console.log($event)

  }


}

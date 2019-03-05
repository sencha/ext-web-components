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
  `
})
export class AppComponent {


  gridTitle = "my grid title"

  readyGrid($event) {
    console.log($event)
  }


}

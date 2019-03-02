declare var Ext: any
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

//import { ExtAngularModule } from '@sencha/ext-angular'
//import { ExtAngularBootstrapService } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.service'
//import { ExtAngularBootstrapComponent } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.component'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

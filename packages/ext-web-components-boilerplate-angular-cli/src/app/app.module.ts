import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import '@sencha/ext-web-components/dist/ext-container.component';
import '@sencha/ext-web-components/dist/ext-viewport.component';
import '@sencha/ext-web-components/dist/ext-dataview.component';
import '@sencha/ext-web-components/dist/ext-searchfield.component';
import '@sencha/ext-web-components/dist/ext-grid.component';
import '@sencha/ext-web-components/dist/ext-button.component';
import '@sencha/ext-web-components/dist/ext-treelist.component';
import '@sencha/ext-web-components/dist/ext-panel.component';
import '@sencha/ext-web-components/dist/ext-titlebar.component';
import '@sencha/ext-web-components/dist/ext-toolbar.component';
import '@sencha/ext-web-components/dist/ext-column.component';
import '@sencha/ext-web-components/dist/ext-widget.component';

import { AppComponent } from './app.component'
import AboutComponent from './about/about.component'
import HomeComponent from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

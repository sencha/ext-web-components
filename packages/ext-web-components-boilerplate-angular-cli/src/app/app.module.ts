import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import '@sencha/ext-web-components-modern';

// import '@sencha/ext-web-components-modern/dist/ext-container.component';
// import '@sencha/ext-web-components-modern/dist/ext-viewport.component';
// import '@sencha/ext-web-components-modern/dist/ext-dataview.component';
// import '@sencha/ext-web-components-modern/dist/ext-searchfield.component';
// import '@sencha/ext-web-components-modern/dist/ext-grid.component';
// import '@sencha/ext-web-components-modern/dist/ext-button.component';
// import '@sencha/ext-web-components-modern/dist/ext-treelist.component';
// import '@sencha/ext-web-components-modern/dist/ext-panel.component';
// import '@sencha/ext-web-components-modern/dist/ext-titlebar.component';
// import '@sencha/ext-web-components-modern/dist/ext-toolbar.component';
// import '@sencha/ext-web-components-modern/dist/ext-column.component';
// import '@sencha/ext-web-components-modern/dist/ext-widget.component';

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

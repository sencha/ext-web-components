import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const Ext = window['Ext'];
Ext.onReady(function () {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
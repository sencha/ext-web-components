import { enableProdMode } from '@angular/core';
//import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { bootstrapModule } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.component';
import { AppModule } from './app/app.module';

//bootstrapModule( AppModule );
// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
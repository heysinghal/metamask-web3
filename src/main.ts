import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { MetaMaskInpageProvider } from '@metamask/providers';

if (environment.production) {
  enableProdMode();
}
declare global{
  interface Window{
    ethereum: MetaMaskInpageProvider;
  }
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

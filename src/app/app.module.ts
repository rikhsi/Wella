import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//modules
import { CardPageModule } from './modules/card-page/card-page.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { HomeModule } from './modules/home/home.module';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

//ngxMaskModule
import { NgxMaskModule } from 'ngx-mask';

//sharedModules
import { AlertModule } from './shared/alert/alert.module';
import { ModalModule } from './shared/modal/modal.module';
import { MediaModule } from './shared/media/media.module';

//formModuleAngular
import { FormsModule } from '@angular/forms';

//translateModule and service
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './services/translate';
import ru from '@angular/common/locales/ru';


registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    CardPageModule,
    CatalogModule,
    MediaModule,
    NzGridModule,
    NzButtonModule,
    NzSpinModule,
    NzIconModule,
    AlertModule,
    ModalModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru'
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }





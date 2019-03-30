import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DataStorageService } from './services/data/data-storage.service';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NoticiasListComponent,
    NoticiasUpsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CarouselModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [ DatePipe, DataStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

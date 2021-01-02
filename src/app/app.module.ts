import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertaComponent } from './alerta/alerta.component';
import { NombreComponent } from './nombre/nombre.component';
import { FormsModule } from '@angular/forms';
import { ClicksComponent } from './clicks/clicks.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertaComponent,
    NombreComponent,
    ClicksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

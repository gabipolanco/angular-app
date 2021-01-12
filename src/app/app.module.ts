import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertaComponent } from './alerta/alerta.component';
import { NombreComponent } from './nombre/nombre.component';
import { FormsModule } from '@angular/forms';
import { ClicksComponent } from './clicks/clicks.component';
import { ShowDirective } from './show.directive';
import { ShowDropdownComponent } from './show-dropdown/show-dropdown.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertaComponent,
    NombreComponent,
    ClicksComponent,
    ShowDirective,
    ShowDropdownComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

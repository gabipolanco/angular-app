import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'users',
  pathMatch: 'full'
}, {
  path: 'users',
  component: UserListComponent
}, {
  path: 'user/:id',
  component: UserDetailComponent
}, {
  path: 'user/edit/:id',
  component: UserEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

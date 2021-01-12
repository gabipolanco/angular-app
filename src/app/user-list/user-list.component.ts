import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = []
  constructor(private userService: UserService, private router: Router) {

   }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }

  edit(id: number) {
   this.router.navigate(['user/edit', id])
  }
}

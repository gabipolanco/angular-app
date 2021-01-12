import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    dni: ''
  }
  id: number = 0

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.user = this.userService.getUser(this.id)
  }

  save() {
    this.userService.editUser(this.id, this.user)
    this.router.navigate(['user', this.id])
  }

}

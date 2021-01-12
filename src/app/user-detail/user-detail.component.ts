import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User = {
    id: 0,
    name: '',
    dni: ''
  }
  id: number = 0

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.user = this.userService.getUser(this.id)
  }

}

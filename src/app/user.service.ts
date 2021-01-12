export interface User {
  id: number,
  name: string,
  dni: string
}

export class UserService {
users: User[] = [
  {
      id: 0,
      name: 'Carla',
      dni: '33.456.789'
  },{
      id: 1,
      name: 'Maria',
      dni: '32.456.789'
  },{
      id: 2,
      name: 'Miguel',
      dni: '33.436.789'
  }
]
getUsers(): User[] {
  return this.users
}
getUser(id: number): User {
  return this.users[id]
}
editUser(id: number, editedUser: User): void {
  this.users[id] = editedUser
}
}

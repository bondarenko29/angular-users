import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';
import {User} from '../shared/user';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: User[] = [];
  username: string;
  name: string;
  role: string;
  selectedList: User[];

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }

  // tslint:disable-next-line:typedef
  search(query: string) {
    this.usersList = this.userService.findUser(query);
  }

  // tslint:disable-next-line:typedef
  sort(direction: string) {
    console.log(direction);
    this.usersList = this.userService.sortUsers(direction);

  }

  // tslint:disable-next-line:typedef
  addUser() {
    this.userService.addUser({
      id: Math.floor((Math.random() * 6) + 10),
      name: this.name,
      username: this.username,
      email: '',
      role: this.role,
      phone: '',
      website: ''

    });

    this.usersList = this.userService.getUsersList();
  }

  // tslint:disable-next-line:typedef
  selectItem(users: MatListOption[]) {
    this.selectedList = [];
    users.forEach(element => {
      this.selectedList.push(element.value);
    });


  }

  // tslint:disable-next-line:typedef
  deleteUsers() {
    this.userService.deleteUsers(this.selectedList);
    this.usersList = this.userService.getUsersList();

  }


}

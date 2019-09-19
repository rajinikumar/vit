import { Component, OnInit } from '@angular/core';
import { UsersService } from './../service/users.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  users : [];
  constructor(private _userService : UsersService) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
  }

}

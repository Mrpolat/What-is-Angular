import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  username: any;
  users:any;
  today=Date.now();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.username = this.userService.username;
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }
}

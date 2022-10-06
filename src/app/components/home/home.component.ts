import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        name:'polat',
        age:22
      },
      {
        name:'adem',
        age:25
      },
    ]
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() user : any; 

  @Input() showDetail : any ; 

  constructor() { }

  ngOnInit(): void {
  }

  select(user:any){
    // console.log('select ' , user)
    this.showDetail(user);
  }
}

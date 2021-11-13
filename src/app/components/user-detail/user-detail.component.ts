import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() detail : any = { id : '' , name : '' , email : '' } ; 
  @Output() changeDetail : any;

  constructor() { }

  ngOnInit(): void {
  }

}

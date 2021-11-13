import { Component, OnInit } from '@angular/core';
import data from '../../../assets/users.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  users = data ; 
  
  detail : any = { id : '1' , name : '' , email : '' }; 


  constructor() { }

  ngOnInit(): void {
  }

  showDetail( user : any ){
    console.log('show detail' , user) ; 
    this.detail = user ; 
  };// show detail 

}

import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  bookList:any

  constructor(private bs:BookdataService){

  }

  ngOnInit(): void {
    this.bs.allBooks().subscribe(data=>{
      this.bookList=data
      
  })
}
}

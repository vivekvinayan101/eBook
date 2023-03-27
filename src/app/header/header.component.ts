import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  searchTerm:any

  constructor(private bs:BookdataService){

  }

  ngOnInit(): void {
    
  }

  search(event:any){
    this.searchTerm=event.target.value
    this.bs.Search.next(this.searchTerm)
  }

}

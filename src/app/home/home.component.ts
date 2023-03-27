import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  bookList:any;

  filterBook:any

  searchKey:any=""

  constructor(private bs:BookdataService){

  }

  ngOnInit():void{

    this.bs.allBooks().subscribe(data=>{
      this.bookList=data
      console.log(this.bookList);
      
    })


    this.bs.Search.subscribe((value:any)=>{
      this.searchKey=value
    })

  }
  filter(category:any){
    this.filterBook=this.bookList.filter((item:any)=>item.categoryId==category || category=="")   

  }
  

}

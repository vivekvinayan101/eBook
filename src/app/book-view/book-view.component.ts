import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookdataService } from '../bookdata.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit{

  bookid:any
  bookData:any

constructor(private bs:BookdataService,private ar:ActivatedRoute){

}

ngOnInit(): void {
  this.ar.params.subscribe((data:any)=>{
    this.bookid=data["id"]

    this.bs.bookView(this.bookid).subscribe((data:any)=>{
      this.bookData=data
    })
  })
}
}

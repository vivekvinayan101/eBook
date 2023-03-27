import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookdataService implements OnInit{

  

  Search=new BehaviorSubject("")

  constructor(private http:HttpClient) {
   
   }
  ngOnInit(): void {
    
  }

  allBooks(){
    return this.http.get('http://localhost:3000/ebook')
  }

  bookView(bookId:any){
    return this.http.get('http://localhost:3000/ebook/'+bookId)
  }
  

  


}

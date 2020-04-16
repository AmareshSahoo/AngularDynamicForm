import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {

  constructor(private http:HttpClient) {    
  }

   url = "https://jsonplaceholder.typicode.com/todos" ;

  getAllData(){    
    return this.http.get(this.url).pipe(
      map((res:any) => {
         const result = res.map(obj => ({
          id: obj.id ,
          title: obj.title,
          completed: obj.completed 
        }))
        return result ;        
      })
    );
  }
}

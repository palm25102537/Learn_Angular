import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError,map} from 'rxjs/operators'
import { AppError } from './error/app-error';
import { BadInput } from './error/bad-input';
import { NotFoundError } from './error/not-found-error';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
   @Inject(String) private url:any,
    private http:HttpClient
 
  ) {
    
   }

   getAll(){
    return this.http.get(this.url).pipe(
     
      map((res)=>{
        
        return res
      }),
      catchError(this.handleError)
    )
   }
 
   create(
     body:any
   ){
     console.log('work')
     return  this.http.post(this.url,body).pipe(
       
       map((res)=>{
        console.log(res)
        return res
      }),
      catchError(this.handleError))
       
   }
 
   update(
     id:number
   ){
     return this.http.put(this.url+`/${id}`,{isRed:true})
   }
 
   delete(
     id:number
   ){
     return this.http.delete(`${this.url}/${id}`).pipe(catchError(this.handleError))
   }
   private handleError(error:Response){
 
     if(error.status === 400){
       return throwError(new BadInput())
     }
     
     if(error.status === 404){
       return throwError(new NotFoundError())
     }
     return throwError(new AppError(error))
   }
  
}

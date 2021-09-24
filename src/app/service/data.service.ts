import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { AppError } from './error/app-error';
import { BadInput } from './error/bad-input';
import { NotFoundError } from './error/not-found-error';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient,
    private url:string
  ) { }

  getAll(){
   return this.http.get(this.url)
  }

  create(
    body:any
  ){
    return  this.http.post(this.url,body).pipe(
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
    return this.http.delete(`${this.url}/a/${id}`).pipe(catchError(this.handleError))
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

import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from './Models/operation/operation.interface';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http:HttpClient) {
   }
   getQuery(query:string){
    const uri=`https://mybalancepersonal.herokuapp.com/api/${query}`
    
    return this.http.get(uri)
  }

  getBalancePerfil(){
    return this.getQuery('home/')
               
  }

  getResumenBalance(query:string){
    return this.getQuery(query)

  }

  addNewOperation(operation:Operation):Observable<Operation>{
      return this.http.post<Operation>('https://mybalancepersonal.herokuapp.com/api/home/add',operation)
  }



}

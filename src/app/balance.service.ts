import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http:HttpClient) {
   }
   getQuery(query:string){
    const uri=`http://localhost:3200/api/${query}`

    return this.http.get(uri)
  }

  getBalancePerfil(){
    return this.getQuery('home/')
               
  }

  getResumenBalance(query:string){
    return this.getQuery(query)

  }



  
}

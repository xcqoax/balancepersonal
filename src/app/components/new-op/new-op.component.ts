import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { BalanceService } from '../../balance.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-new-op',
  templateUrl: './new-op.component.html',
  styleUrls: ['./new-op.component.css']
})
export class NewOpComponent implements OnInit {

  name:string;
  amount:Number;
  type: String;
  commit: String;
  newdate: String

  constructor( private operation:BalanceService, private router: Router) { }

  ngOnInit(): void {
  }
  addNewOp(event){
    event.preventDefault();
    this.newdate = moment().format('MMMM Do YYYY')
    const newOperation = {
      name : this.name,
      amount: this.amount,
      type: this.type,
      commit: this.commit,
      date: this.newdate
    }
console.log(typeof(this.newdate))
    this.operation.addNewOperation(newOperation)
        .subscribe((data:any)=>{
          console.log(data)
        })
setTimeout(() => {
  this.router.navigate(['/resume'])
}, 500);
        
  }

}

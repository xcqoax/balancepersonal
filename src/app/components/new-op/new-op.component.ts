import { Component, OnInit } from '@angular/core';

import { BalanceService } from '../../balance.service';


@Component({
  selector: 'app-new-op',
  templateUrl: './new-op.component.html',
  styleUrls: ['./new-op.component.css']
})
export class NewOpComponent implements OnInit {

  name:string;
  amount:Number;
  type: String;
  commit: String

  constructor( private operation:BalanceService) { }

  ngOnInit(): void {
  }
  addNewOp(event){
    event.preventDefault();
    const newOperation = {
      name : this.name,
      amount: this.amount,
      type: this.type,
      commit: this.commit
    }

    this.operation.addNewOperation(newOperation)
        .subscribe((data:any)=>{
          console.log(data)
        })
  }

}

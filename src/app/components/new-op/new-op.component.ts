import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../../balance.service';
import { Operation } from '../../Models/operation/operation.class';

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
    event.preventDefault()
     
  }

}

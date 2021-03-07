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
  
  isMessage:Boolean;
  message:String;
  typeMessage:any;

  ngOnInit(): void {
  }

  addNewOp(event){
    event.preventDefault();

    this.newdate = moment().format('MMMM Do YYYY')

if(this.amount > 0){
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
          this.typeMessage = data.type
          this.message = data.message
          this.isMessage = true;
          
          
          if(this.typeMessage == 'success'){

            setTimeout(() => {
              this.isMessage = false;
              this.router.navigate(['/resume'])
            }, 700);
          } else if(this.typeMessage == 'error'){
              
              setTimeout(() => {
                this.isMessage = false;
              }, 2000);
          }
        })
    }else {
      this.isMessage = true;
      this.message = 'Only numbers'
      this.typeMessage = 'error'
    }



        
  }

}

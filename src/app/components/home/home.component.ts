import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../../balance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:String;
  balancePerfil:Number

  constructor(private balance:BalanceService) {
    
      this.balance.getBalancePerfil()
                  .subscribe((data:any) =>{
                    console.log(data)
                    this.name = data.name;
                    this.balancePerfil = data.amount;
                  })
   }

  ngOnInit(): void {
  }

}

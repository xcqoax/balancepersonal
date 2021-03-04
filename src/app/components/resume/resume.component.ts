import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../../balance.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

operations:[]


  constructor(private resume: BalanceService) { 

       this.getResumenPerfil()

  }

  getResumenPerfil(){
    this.resume.getResumenBalance('/home/alloperations')
          .subscribe((data:any)=>{

              this.operations = data
              console.log(this.operations)
              
          })
}

  ngOnInit(): void {
  }

}

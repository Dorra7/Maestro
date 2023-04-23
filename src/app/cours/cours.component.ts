import { Component } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {
  constructor(private tab:Service1Service){

    this.t=tab.getTable()
  }
  t : any = []
  a = {
    "cours":'',
    "lien": ''
  }

   add(f:any){
     this.a=f.value  
   }
 
   
}

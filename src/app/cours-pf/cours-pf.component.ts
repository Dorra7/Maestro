import { Component } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-cours-pf',
  templateUrl: './cours-pf.component.html',
  styleUrls: ['./cours-pf.component.css']
})
export class CoursPfComponent {
 
  add(f:any){
    this.t.ajouter(f.value)  
    console.log(this.t.tab)
  }

  t1: any=this.t.getTable();
 
  constructor(private t:Service1Service){
  }
   
}

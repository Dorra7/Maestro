import { Component } from '@angular/core';
import { Service1Service } from '../services/service1.service';

let a=document.getElementById("lien_meet")

@Component({
  selector: 'app-cours-pf',
  templateUrl: './cours-pf.component.html',
  styleUrls: ['./cours-pf.component.css']
})
export class CoursPfComponent {
  a=document.getElementById("lien_meet")

  add1(f1:any){
    let d=f1.value
    console.log(d.lien_meet)
    this.t.set_lien(d.lien_meet)
  }
  add(f:any){
    this.t.ajouter(f.value)  
    console.log(this.t.tab)
    console.log(this.t.get_lien())
  }

  t1: any=this.t.getTable();
  
  constructor(private t:Service1Service){
  }
    

}

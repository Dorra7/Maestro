import { Component } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-cours-etd',
  templateUrl: './cours-etd.component.html',
  styleUrls: ['./cours-etd.component.css']
})
export class CoursEtdComponent {
  t1: any=this.t.getTable();
 
  constructor(private t:Service1Service){
  }
}

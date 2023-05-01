import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-devenir-prof',
  templateUrl: './devenir-prof.component.html',
  styleUrls: ['./devenir-prof.component.css']
})
export class DevenirProfComponent {
  add(f:NgForm){
    this.prof.addprof(f.value)
    console.log(this.prof.getprof())
    alert("Bienvenue chez nous !")
  }
  person={
    nom : String,
    instrument :String,  
    prenom : String,
    city : String,
    tele : String,
    mail : String,
    motpasse : String,
    codeP:String
  }
  
constructor(private prof:Service1Service){

}

}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-devenir-clt',
  templateUrl: './devenir-clt.component.html',
  styleUrls: ['./devenir-clt.component.css']
})
export class DevenirCltComponent {
  
  person1={
    nom : String,
    date :String,  
    prenom : String,
    addresse : String,
    mail : String,
    motpasse : String,
  }
  add(f:NgForm) {
    this.user2.addetd(f.value)
    console.log(this.person1)
    console.log(this.user2.getetd())
    alert("bienvenu")

  }
constructor(private user2:Service1Service){
}
}
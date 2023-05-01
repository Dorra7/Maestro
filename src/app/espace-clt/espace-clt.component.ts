import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service1Service } from '../services/service1.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-espace-clt',
  templateUrl: './espace-clt.component.html',
  styleUrls: ['./espace-clt.component.css']
})
export class EspaceCltComponent {
  test:boolean =true;
  t :any []=[]
  constructor(private auth:Service1Service, public route1 :Router){
   this.t=this.auth.getetd();

  }
  
  
  
  add(f:NgForm){
    let mail=f.value.mail;
    let mot=f.value.password;
     console.log(mail)
     console.log(mot)
     this.test=false;
     for (let i of this.auth.etd){
        if(i.mail==mail&& i.motpasse==mot){
        this.route1.navigate(['/cours-etd'])
        this.test=true
        }
     }
     if(!this.test){
      this.test=false;
     }

   }
   }



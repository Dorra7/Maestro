import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service1Service } from '../services/service1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-prof',
  templateUrl: './espace-prof.component.html',
  styleUrls: ['./espace-prof.component.css']
})
export class EspaceProfComponent {
  test:boolean =true;
  t :any []=[]
  constructor(private auth:Service1Service, public route:Router){
   this.t=this.auth.getprof();

  }


  add(f:NgForm){
    let mail=f.value.mail;
    let mot=f.value.mot;
     console.log(mail)
     console.log(mot)
     this.test=false;
     for (let i of this.auth.prof){
        if(i.mail==mail&& i.motpasse==mot){
        this.route.navigate(['/cours-pf'])
        this.test=true
        }
     }
     if(!this.test){
      this.test=false;
     }

   }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-espace-prof',
  templateUrl: './espace-prof.component.html',
  styleUrls: ['./espace-prof.component.css']
})
export class EspaceProfComponent {
  add(f:NgForm){
    console.log(f.value)
   }
}

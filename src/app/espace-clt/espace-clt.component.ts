import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-espace-clt',
  templateUrl: './espace-clt.component.html',
  styleUrls: ['./espace-clt.component.css']
})
export class EspaceCltComponent {
   add(f:NgForm){
    console.log(f.value)
   }
}

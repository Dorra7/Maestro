import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  tab : any [] = []
  a = {
    "cours":'',
    "lien": ''
  }
    ajouter(a:any){
      this.tab.push(a); 
    }
  getTable(){
    return this.tab;
  }



  i:number=1;
  prof :any [] =[
  {nom : "",
  instrument :"",  
  prenom :  "",
  city :  "",
  tele :  "",
  mail :  "",
  motpasse :  "",
  codeP: ""}

  ]
    addprof(b:any){
      this.prof[this.i]=b;
      this.i++;
    }
  getprof(){
    return this.prof;
  }



  etd :any [] =[]
  c={
    nom :  "",
    date : "",  
    prenom :  "",
    addresse :  "",
    mail : "",
    motpasse : "",
   }
   addetd(c:any){
     this.etd.push(c); 
   }
 getetd(){
   return this.etd;
 }



  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  tab : any [] = [
    {cours:"Premiers pas du pianiste",
    lien: "https://pianofacile.net/wp-content/uploads/2011/12/piano-facile.pdf"
    },
    {
      cours : "L'essentiel à savoir" ,
      lien : "https://www.coursdepiano-sainthubert.com/images/Cours%20de%20Piano%20Saint-Hubert%20brochure.pdf"
    }
    


  ]
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


  prof :any [] =[
  {nom : "Arfaoui",
  prenom :  "Hassen",
  mail :  "hassenarfaoui268@gmail.com",
  motpasse :  "password123",
  instrument :"Piano",  
  city :  "Boumhel",
  tele :  "23517510",
  codeP: "2097"},

  {nom : "Bahri",
  prenom :  "Dorra",
  mail :  "dorra.bahri370@gmail.com",
  motpasse :  "password159",
  instrument :"Guitare",  
  city :  "Hammam-lif",
  tele :  "27922300",
  codeP: "2050"},

  {nom : "Matar",
  prenom :  "Ilef Hiba",
  mail :  "ilefhiba@gmail.com",
  motpasse :  "password753",
  instrument :"Piano",  
  city :  "Rades",
  tele :  "23517519",
  codeP: "2090"}

  ]
    addprof(b:any){
      this.prof.push(b);
    }
  getprof(){
    return this.prof;
  }



  etd :any [] =[
    {
      nom :  "Melki",
      prenom : "Youssef",
      date : "26/08/2002",  
      addresse :"Boumhel",
      mail : "youssefmelki@gmail.com",
      motpasse : "youssef123",
     },

     {
      nom :  "Souey",
      prenom :  "Achref",
      date : "20/04/2001",  
      addresse : "Manouba",
      mail : "ashrefsouey@gmail.com",
      motpasse : "souey123",
     },

     {
      nom :"Othmen",
      prenom :  "Eya",
      date :"1/01/2002",  
      addresse :"Ben Arous",
      mail : "ayaothmen@gmail.com",
      motpasse : "aya123",
     }]
   
   addetd(c:any){
     this.etd.push(c); 
   }
 getetd(){
   return this.etd;
 }


 lien:String="https://meet.google.com"
get_lien(){
  return this.lien
}
set_lien(a:any){
  this.lien=a
}


  constructor() { }
}

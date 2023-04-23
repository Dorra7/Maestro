import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EspaceCltComponent } from './espace-clt/espace-clt.component';
import { EspaceProfComponent } from './espace-prof/espace-prof.component';
import { DevenirCltComponent } from './devenir-clt/devenir-clt.component';
import { DevenirProfComponent } from './devenir-prof/devenir-prof.component';
import { DecouvrirComponent } from './decouvrir/decouvrir.component';
import { CoursComponent } from './cours/cours.component';
import { CoursEtdComponent } from './cours-etd/cours-etd.component';
import { CoursPfComponent } from './cours-pf/cours-pf.component';

 
const appRoute: Routes=[
  {path:'', component:DecouvrirComponent},
  {path:'decouvrir', component:DecouvrirComponent},
  {path:'devenir-clt', component:DevenirCltComponent},
  {path:'devenir-prof', component:DevenirProfComponent},
  {path:'espace-clt', component:EspaceCltComponent},
  {path:'cours-etd', component:CoursEtdComponent}, 
  {path:'espace-prof', component:EspaceProfComponent},
  {path:'cours-prof' , component :CoursComponent},
  {path:'cours-pf', component:CoursPfComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EspaceCltComponent,
    EspaceProfComponent,
    DevenirCltComponent,
    DevenirProfComponent,
    DecouvrirComponent,
    CoursComponent,
    CoursEtdComponent,
    CoursPfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

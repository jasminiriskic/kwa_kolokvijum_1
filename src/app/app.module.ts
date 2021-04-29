import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KupciComponent } from './components/kupci/kupci.component';
import { KupovineComponent } from './components/kupovine/kupovine.component';
import { ProizvodiComponent } from './components/proizvodi/proizvodi.component';
import { KupciDodavanjeComponent } from './components/kupci-dodavanje/kupci-dodavanje.component';
import { KupciIzmjenaComponent } from './components/kupci-izmjena/kupci-izmjena.component';
import { ProizvodiDodavanjeComponent } from './components/proizvodi-dodavanje/proizvodi-dodavanje.component';
import { ProizvodiIzmjenaComponent } from './components/proizvodi-izmjena/proizvodi-izmjena.component';
import { KupovineIzmjenaComponent } from './components/kupovine-izmjena/kupovine-izmjena.component';
import { KupovineDodavanjeComponent } from './components/kupovine-dodavanje/kupovine-dodavanje.component';

@NgModule({
  declarations: [
    AppComponent,
    KupciComponent,
    KupovineComponent,
    ProizvodiComponent,
    KupciDodavanjeComponent,
    KupciIzmjenaComponent,
    ProizvodiDodavanjeComponent,
    ProizvodiIzmjenaComponent,
    KupovineIzmjenaComponent,
    KupovineDodavanjeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

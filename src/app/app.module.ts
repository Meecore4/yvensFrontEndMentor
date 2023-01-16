import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// fait par alicia//
// import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from './header/header.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // FormulaireComponent,
    HeaderComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    FooterComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

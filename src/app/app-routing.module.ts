import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { FormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from './header/header.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },

  { path: 'page1', component: Page1Component },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },

  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

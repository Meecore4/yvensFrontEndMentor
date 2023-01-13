import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { FormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';


const routes: Routes = [

  {path: 'formulaire', component: FormulaireComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

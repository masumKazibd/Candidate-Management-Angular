import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterEditComponent } from './components/master-edit/master-edit.component';
import { MasterViewComponent } from './components/master-view/master-view.component';
import { MasterComponent } from './components/master/master.component';

const routes: Routes = [
  { path: '', redirectTo: '/Candidates', pathMatch: 'full' },
  { path: 'Candidates', component: MasterViewComponent },
  { path: 'Candidates/Create', component: MasterComponent },
  { path: 'Candidates/Edit/:id', component: MasterEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

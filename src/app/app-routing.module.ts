import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FormationComponent } from './pages/formation/formation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ProjetosComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'formation', component: FormationComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'hobbies', component: HobbiesComponent},
  { path: 'projetos', component: ProjetosComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

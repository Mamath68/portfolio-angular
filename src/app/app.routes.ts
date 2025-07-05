import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Projects} from './projects/projects';
import {Skills} from './skills/skills';
import {Contact} from './contact/contact';
import {Experience} from './experience/experience';
import {Mentions} from './mentions/mentions';

export const routes: Routes = [
  {path: "", component: Home, title: "Mathieu Stamm"},
  {path: "projects", component: Projects, title: "Mes Projets"},
  {path: "skills", component: Skills, title: "Mes Compétences"},
  {path: "contact", component: Contact, title: "Me contacter"},
  {path: "experiences", component: Experience, title: "Mes expériences"},
  {path: "mentions", component: Mentions, title: "Mentions légaux"},
];

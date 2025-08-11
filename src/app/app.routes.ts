import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Projects} from './projects/projects';
import {Skills} from './skills/skills';
import {Contact} from './contact/contact';
import {Experience} from './experience/experience';
import {Mentions} from './mentions/mentions';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "projects", component: Projects},
  {path: "skills", component: Skills},
  {path: "contact", component: Contact},
  {path: "experiences", component: Experience},
  {path: "mentions", component: Mentions},
];

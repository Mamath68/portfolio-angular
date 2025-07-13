import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})

export class ProjectCard {
  @Input() title!: string;
  @Input() languages!: string[];
  @Input() description?: string;
  @Input() repo?: string;
  @Input() demo?: string;

  getLanguageColor(language: string): string {
    const colors: { [key: string]: string } = {
      "react-native": "bg-red-500",
      "php": "bg-blue-600 ",
      "expo": "bg-cyan-400",
      "bootstrap": "bg-purple-500",
      "js": "bg-yellow-500",
      "html": "bg-orange-500",
      "mysql": "bg-blue-300 ",
      "ygoprodeck": "bg-amber-800",
      "spring boot": "bg-green-500",
      "css": "bg-green-400",
      "java": "bg-blue-500 "
    };
    return colors[language.toLowerCase()] || "bg-gray-500";
  }
}

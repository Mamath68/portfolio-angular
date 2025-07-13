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
      "flutter": "bg-purple-500",
      "angular": "bg-red-500",
      "html": "bg-orange-500",
      "dart": "bg-orange-600 ",
      "scss": "bg-green-300",
      "node.js": "bg-green-500",
      "express": "bg-cyan-400",
      "typescript": "bg-blue-500 ",
      "mongodb": "bg-blue-500 "
    };
    return colors[language.toLowerCase()] || "bg-gray-500";
  }
}

import {Component, OnInit} from '@angular/core';
import {Github} from '../service/github/github';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    NgClass
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  repos: any[] = [];
  languageColors: { [key: string]: string } = {
    JavaScript: 'bg-yellow-400 text-black',
    TypeScript: 'bg-blue-500 text-white',
    HTML: 'bg-orange-500 text-white',
    CSS: 'bg-blue-300 text-black',
    PHP: 'bg-indigo-600 text-white',
    Java: 'bg-red-600 text-white',
    Python: 'bg-green-600 text-white',
    Go: 'bg-cyan-600 text-white',
    Kotlin: 'bg-purple-500 text-white',
    Twig: 'bg-green-700 text-white',
    Hack: 'bg-pink-500 text-white',
    Makefile: 'bg-gray-600 text-white',
    Dockerfile: 'bg-blue-800 text-white',
    default: 'bg-gray-400 text-white'
  };


  constructor(private githubService: Github) {
  }

  ngOnInit() {
    this.githubService.getRepos().subscribe((data: any) => {
      this.repos = data;
      this.repos.forEach(repo => {
        this.githubService.getLanguages(repo.name).subscribe((langs: any) => {
          repo.languages = Object.keys(langs);
        });
      });
    });
  }

}

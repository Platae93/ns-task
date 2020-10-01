import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-searcher',
  templateUrl: './bug-searcher.component.html',
  styleUrls: ['./bug-searcher.component.css']
})
export class BugSearcherComponent implements OnInit {

  // public searchText: string;
  public foundIssues:Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.foundIssues=[{},{},{}];
    //this.foundIssues= await IssuesService.search("").toPromise();
  }

  public onSearch(searchText:string) {
  //DO search
  console.log(searchText);
  }

}


//Añadir 3 pruebas
//USar observables
//Usar autocomplete en barra de búsqueda
//consumir API de github, solo obtener los issues de React, busqueda por título

// Reynaldo Abraham Hinojo Hinojo19:00
// Using Github’s API[ (https://docs.github.com/en/rest/overview 9)], build an application with an autocomplete input box for searching issues for React’s repo (https://github.com/facebook/react/issues) 6. Input and results should be able to navigate via keyboard shortcuts. Each result should have but not limited to, the issue’s title and labels.
// https://hub.nearsoft.com/uploads/default/original/2X/9/941ef4f19bf10819786ba8b9b9b7410636a24913.png
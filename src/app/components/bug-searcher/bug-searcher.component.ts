import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, from, zip } from 'rxjs';

import { IssuesService } from 'src/app/services/issues-searcher.service';

@Component({
  selector: 'app-bug-searcher',
  templateUrl: './bug-searcher.component.html',
  styleUrls: ['./bug-searcher.component.css']
})
export class BugSearcherComponent implements OnInit {

  public foundIssues;
  public screenMessage;

  constructor(private issuesService: IssuesService) { }

  async ngOnInit(): Promise<any> {
    //Initial issue search
    let promiseResults = await this.issuesService.getIssues().toPromise();
    this.foundIssues = promiseResults['items'];
  }

  public onSearch(searchText) {
    this.issuesService
      .getIssues(searchText)
      .subscribe(
        response => {
          this.foundIssues = response['items'];
          if(!response['items'].length)
            this.screenMessage = 'No results were found with the given parameters.'

        },
        error => {
          this.foundIssues = [];
          this.screenMessage = `An error ocurred loading the issues. \n ERROR: ${error.toString()}`
        }
      );

  }





}

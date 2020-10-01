import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/services/issues-searcher.service';

@Component({
  selector: 'app-bug-searcher',
  templateUrl: './bug-searcher.component.html',
  styleUrls: ['./bug-searcher.component.css']
})
export class BugSearcherComponent implements OnInit {

  // public searchText: string;
  public foundIssues;

  constructor( private issuesService:IssuesService) { }

  async ngOnInit(): Promise<any> {
    this.foundIssues= await this.issuesService.getIssues().toPromise();
  }

  public onSearch(searchText:string) {
  //DO search
  console.log(searchText);
  }

}

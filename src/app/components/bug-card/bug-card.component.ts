import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../../interfaces/issue.interface';


@Component({
  selector: 'app-bug-card',
  templateUrl: './bug-card.component.html',
  styleUrls: ['./bug-card.component.css']
})
export class BugCardComponent implements OnInit {

  @Input() issue: Issue;

  constructor() { }

  ngOnInit(): void {

  }

}

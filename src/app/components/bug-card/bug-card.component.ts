import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bug-card',
  templateUrl: './bug-card.component.html',
  styleUrls: ['./bug-card.component.css']
})
export class BugCardComponent implements OnInit {

  @Input() issue: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}

import {
  Component,
  EventEmitter,
  OnInit, Output,
  ViewChild,
  ElementRef
} from '@angular/core';

import { fromEvent } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
@Component({
  selector: 'app-autocomplete-searchbar',
  templateUrl: './autocomplete-searchbar.component.html',
  styleUrls: ['./autocomplete-searchbar.component.css']
})
export class AutocompleteSearchbarComponent implements OnInit {

  // @ViewChild('searchbox', { static: true }) searchbox: ElementRef;
  @Output() searchText: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    let searchbox = document.getElementById("autocomplete-searchbar");
    fromEvent(searchbox, 'keyup').pipe(
      //Getting the value from the event
      map(event => (event['target'] as HTMLInputElement).value),
      //Just consider the text if the length is greater than the given number, or zero
      filter(text => text.length > 2 || !text.length),
      //Debounce time between keystrokes
      debounceTime(500),
      //Just proceed if diferent
      distinctUntilChanged()
    ).subscribe(
      (text: string) => {
        this.doSearch(text);
      }
    );
  }

  doSearch(searchText) {
    this.searchText.emit(this.cleanText(searchText));
  }

  cleanText(dirtyText: string): string {
    //Removing whitespaces before and after the string
    dirtyText = dirtyText.trim();
    //Making searchText lowercase
    dirtyText = dirtyText.toLocaleLowerCase();
    //Remove special characters
    dirtyText = dirtyText.replace(/[^a-zA-Z0-9 ]/g, "");
    return dirtyText;
  }

}

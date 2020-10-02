import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { AutocompleteSearchbarComponent } from './components/autocomplete-searchbar/autocomplete-searchbar.component';
import { BugSearcherComponent } from './components/bug-searcher/bug-searcher.component';
import { BugCardComponent } from './components/bug-card/bug-card.component';
//Services
import { IssuesService } from './services/issues-searcher.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AutocompleteSearchbarComponent,
    BugSearcherComponent,
    BugCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    IssuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

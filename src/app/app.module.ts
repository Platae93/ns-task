import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { BugSearcherComponent } from './components/bug-searcher/bug-searcher.component';
import { BugCardComponent } from './components/bug-card/bug-card.component';
//Services
import { IssuesService } from './services/isses-searcher.service';


@NgModule({
  declarations: [
    AppComponent,
    BugSearcherComponent,
    BugCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    IssuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

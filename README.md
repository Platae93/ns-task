# NS-Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

This project searches [React](https://github.com/facebook/react) issues, and display them in a list. It also implements an autocomplete with a delay, used to search in the issues using the GitHub API.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Just app component and autocomplete-searchbar component are tested.

## Considerations

The unauthorized Github api just allows 10 requests per minute, otherwise it will return a 403,  which may result in an error message in the app.

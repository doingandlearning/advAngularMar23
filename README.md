# Advanced Angular 20th-22nd March 2023
https://bit.ly/angular-glencore

## Kevin Cunningham - Framework Training

- 9:30 start
- 11:00 coffee break
- 1:00 lunch break
- 3:00 tea break
- 4:30 end

`ng new`

## Monday
- intro
	- what do you know
	- what do you need to know
- writing code together
	- let's write code together, ask questions and chat about what we find
	- I'll collect questions as we go, depending on timing and how confident I can explain it clearly, we might end up answering them straight away, this afternoon or tomorrow
- Check setup
	- npm install --global @angular/cli
	- Node versions (should be on 18, 16 just about okay!)
- best practices and performance
	- We'll think about these throughout what we're doing today.
- interpolation {{}}
	- app.ts and app.component.html
- generating stuff
	- generate a component
	- exploring the CLI
- components, modules etc
- bindings
- architectural
- complete the routing
- compare ways to pass data around in an app
- input/output/event
- Review Exercise
- pipes
	- https://angular.io/guide/pipes
- content projection
- *ngIf or [disabled]= also consider [hidden]=
- how to migrate from older angular

Questions:
- Hash Routing and guards
- Reusability options (modules, stand alone)

## Tuesday.
- brief review
- HttpClient Module (replaces earlier Http Module)
- Services
	- Providers
	- useFactory
	- useFactory with deps
- Strategies for reusability - modules and standalone 
- Observables
	- subscription: `every subscription is destroyed when component is destroyed
	- manually unsubscribe too
- Forms
- Change detection
- Review Exercise
- rxjs, combining data

questions:
- releases that don't end up in browsers
- routing: router guards, strategies of routing (hash), 
- Lazy loading 
- does it tree shake to make a single instance of module for multiple module imports?
- why does app.module not have CommonModule ?? (BrowserModule)
- Using other non-standalone components
- Libraries

## Wednesday
- ngrx
- Ivy: much better tree-shaking, new DI, faster/smaller code modules, no need for app.module etc.
- Libraries
- Testing unit e2e
  see https://github.com/juristr/angular-testing-recipes
  (download it, unzip it, npm install...)
- snapshots in tests: use JEST https://izifortune.com/snapshot-testing-angular-applications/
- cache-busting
- obfuscated (obfuscation)
- closure
- Review Exercise
- publish - production - look at the generated code esp js, also aot and jit
- locale (if time)
- end of course feedback

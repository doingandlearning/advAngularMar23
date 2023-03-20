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
- pipes
	- https://angular.io/guide/pipes
- components, modules etc
- bindings
- architectural
- complete the routing
- compare ways to pass data around in an app
- input/output/event
- content projection
- Review Exercise
- how to migrate from older angular
- *ngIf or [disabled]= also consider [hidden]=

Questions:
- Hash Routing
- Reusability options (modules, stand alone)

## Tuesday
- finish Content Projection ex.
- brief review
- HttpClient Module (replaces earlier Http Module)
- Services
- async pipe
- subscription: every subscription is destroyed when component is destroyed
- manually unsubscribe too
- life-cycle events
- change detection
- Review Exercise
- rxjs, combining data
- questions

## Wednesday
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

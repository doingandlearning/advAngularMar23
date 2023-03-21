Change Detection Strategies in Angular

Introduction
Change detection in Angular is the mechanism by which the framework keeps the UI updated based on changes in the data model. Angular provides two change detection strategies: Default and OnPush.

Default Change Detection
By default, Angular uses the Default change detection strategy. It checks for changes in every component, regardless of whether there are actual changes or not. This can lead to performance issues in large applications.

Example:

```typescript

import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  template: `
    <div>{{ counter }}</div>
    <button (click)="increment()">Increment</button>
  `,
})
export class DefaultComponent {
  counter = 0;

  increment() {
    this.counter++;
  }
}
```
## OnPush Change Detection
The OnPush change detection strategy is more efficient. Angular only checks components when their input properties change or an event is emitted from within the component.
Example:

```typescript
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  template: `
    <div>{{ data }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent {
  @Input() data: string;
}
```

## Gotchas
- Immutability: When using OnPush, always treat input properties as immutable. Avoid changing the properties directly, as this won't trigger change detection.
- Async operations: Be careful with asynchronous operations (e.g., HTTP requests), as they won't trigger change detection automatically. Use the async pipe or manually trigger change detection using ChangeDetectorRef.

## When to change the strategy
Consider changing the change detection strategy to OnPush when:
- You have performance issues in large applications.
- Your components have a clear separation between input properties and internal state.
- You can ensure immutability of input properties.

## Example of using ChangeDetectorRef to trigger change detection manually:

```typescript
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manual-trigger',
  template: `
    <div>{{ data }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManualTriggerComponent {
  data: string;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get('https://api.example.com/data').subscribe((response) => {
      this.data = response.data;
      this.cd.detectChanges();
    });
  }
}
```
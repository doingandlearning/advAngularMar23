The @Input and @Output decorators are two important features in Angular that allow you to pass data between components. Here are some notes on how to use these decorators in your Angular application:

# @Input decorator: 

The @Input decorator is used to pass data from a parent component to a child component. To use it, you need to declare an input property in your child component and decorate it with @Input. For example:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '{{ name }}'
})
export class ChildComponent {
  @Input() name: string;
}
```

In this example, the @Input decorator is used to define the name property as an input property. The parent component can bind to this property using property binding syntax, like so:

```html
<app-child [name]="parentName"></app-child>
```

# @Output decorator: 
The @Output decorator is used to pass data from a child component to a parent component. To use it, you need to declare an output property in your child component and decorate it with @Output. For example:

```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="onClick()">Click me</button>'
})
export class ChildComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
```

In this example, the @Output decorator is used to define the clicked property as an output property. The child component can emit events using the emit() method of the EventEmitter. The parent component can listen to these events using event binding syntax, like so:

```html
<app-child (clicked)="onChildClicked()"></app-child>
```

In this example, the onChildClicked() method of the parent component will be called whenever the child component emits a clicked event.

---

For more information on using @Input and @Output in Angular, you can refer to the official Angular documentation:

Input decorator: https://angular.io/api/core/Input
Output decorator: https://angular.io/api/core/Output
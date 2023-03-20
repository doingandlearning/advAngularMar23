Data binding is a powerful feature of Angular that allows you to connect your application's data model with the user interface. There are several types of data binding in Angular, including one-way binding, two-way binding, and event binding. Here are some notes on the different types of data binding and their syntax:

# One-way binding: 

One-way data binding in Angular allows you to display data from your component's properties in the template. This is done using the square brackets [] syntax. For example, if you have a component property named username, you can bind it to a template element using the following syntax:

```html
 <h1>{{username}}</h1>
```
 
This will display the value of username in the heading element.

# Event binding: 
Event binding allows you to respond to user input by executing methods in your component. This is done using the parentheses () syntax. For example, if you have a button that triggers a submit() method in your component, you can bind it to the button using the following syntax: 

```html
<button (click)="submit()">Submit</button>
```

# Two-way binding: 
Two-way data binding in Angular allows you to synchronize data between your component's properties and the template. This is done using the square brackets and parentheses [( )] syntax. For example, if you have an input element that binds to a username property in your component, you can use the following syntax: 

```html
<input [(ngModel)]="username" />
``` 

This will synchronize the data between the input element and the username property in both directions.

It's important to note that two-way binding requires the FormsModule to be imported in your module. Also, the ngModel directive used in two-way binding is part of the FormsModule package.

---

For more information on data binding in Angular, you can refer to the official Angular documentation:

One-way binding: https://angular.io/guide/property-binding
Event binding: https://angular.io/guide/event-binding
Two-way binding: https://angular.io/guide/two-way-binding
Forms module: https://angular.io/guide/forms-overview
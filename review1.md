# Angular Review Exercise 1  
===========================

## What is the aim?

We're going to make a reusable component with two input fields and a button.

By default, the input fields with have placeholders of "City" and "Country" respectively. These should be overrideable with passed in @Input properties.

The text of the button should be configurable with an @Input and the button should emit an event when clicked.

Bad diagram:

![Alt text](Screenshot%202023-03-20%20at%2014.42.24.png)
## Possible steps
- Stop the current project server, then create a new app (ng new review) with routing
- Generate a 'home' component which shows by default
- Generate a 'data' component and write two <input> tags and a button
- Make the placeholder and button text configurable via @Input and @Output

- The component will be used for at least two configurations
  - inputs for 'city' and for 'country' (the default configuration)
  - inputs for 'category' and 'id'

- Build a harness or wrapping component to show your component working with the default configuration and the overridden config
- Show the harness component in the app.component.html template


Optional (if time permits)
--------
- Configure a default (click) handler for the button which then emits a custom event
- Handle this custom event in the parent component
- Try building your app and compare the generated code-base for size and performance
- Add routes to your app
Angular Review Exercise 1  
=========================
- Stop the current project server, then create a new app (ng new review) with routing
- Generate a 'home' component which shows by default
- Generate a 'data' component and write two <input> tags and a button
- Make the placeholder and button text configurable via @Input and @Output

- The component will be used for at least two configurations
  - inputs for 'city' and for 'country' (the default configuration)
  - inputs for 'category' and 'id'

- Build a harness component (to try out your configurable component)
- Show the harness component in the app.component.html template


Optional
--------
- Configure a default (click) handler for the button which then emits a custom event
- Handle this custom event in the parent component
- Try building your app and compare the generated code-base for size and performance
- Add routes to your app
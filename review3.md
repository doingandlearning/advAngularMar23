# Advanced Angular Review 3
=========================
Choose your own adventure!

**Either**:
Re-use as much code as possible to build a project that uses the SWAPI service.
	https://swapi.dev/api/

This is an API that returns data about the Star Wars universe. 

The idea is to see how much of the code you wrote for the Weather project is reusable in this similar (querying an API for data based on user input) but different (Star Wars vs Weather) experience.

Possible things to do:
- Configure a service to accept a category and a number
	https://swapi.dev/api/people/1     (or starships, species, planets etc.) 
- Configure a form to accept inputs for category and a number, then pass these to the service
- You could do this by putting a generic reuseable form and the service into a library
- Generate component(s) to show some of the returned data 
> NOTE: the returned data is different for each catergory, but they all have a 'name' property

- Generate a production build of this application

**Or**:

Work on the ngrx application:
- Add actions for removing items and clearing the cart
- Add selector for viewing the cart contents and wire up the Cart page
- Wire up the buttons there
- Add selector total number of products and wire up the header
- Get the products through a service rather than hard coding them


Optional (if time permits for either project)
--------
- Devise tests for your code (components and services)
- Add AuthGuards for parts of your application
- How else could you use localStorage? Could you create a cache?
- Explore different methods of debugging as you work on the application
- If you haven't used standalone components yet, could you convert one of your existing components while keeping your application functional?

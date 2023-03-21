# Advanced Angular Review Exercise 2 
==================================

## Aim

Create a Weather API using inputs to get the data and a button to trigger the request

![Alt text](Screenshot%202023-03-21%20at%2013.58.33.png)

## Possible approach

You *can* build on the project you created yesterday and use that component in this project.

My version is in the repo if you'd like to start from there. 

We need to ask the user for 'city' and 'country' values, then fetch a weather report from 

http://api.openweathermap.org/data/2.5/weather?q=sofia,bg&APPID=48f2d5e18b0d2bc50519b58cce6409f1&units=metric

```js
`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1&units=metric`
```

(Replace sofia, bg with city and country as entered by the user)

From the returned JSON, decide what you will show description and temperature 
	e.g. myWeatherClassInstance.weatherDescription = this.weatherReport.weather[0].description


Write the http call in a service which is invoked when the user clicks a button 
When the app first loads, make a request using sensible defaults

Optional (it time permits)
--------
- Offer the choice to show temperature in Kelvin (via a conversion service)
- Show a few more weather data members, such as wind-speed and direction
- Explore using standalone components
- Every time a weather report is requested, add the city/country combination to an array, along with a time-stamp and the resulting weather description
	- In a separate routed component, show these historical data members
	- Clicking one of these should make a fresh request using the city/country values
	- Persist the most recent city/country values in localStorage and retrieve them when the page first loads
- Offer type-ahead (autocomplete) for the country field, including a debounce time
	- For example, suggest bg, gb, fr, de, ei, es, it, usa, uae, aus, ru (from a local data set)









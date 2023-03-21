import { Component } from "@angular/core";
import { WeatherServiceService } from "../weather-service.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent {
  weatherData: any | null = null;
  city = "London";
  country = "UK";
  units: "metric" | "kelvin" = "metric";

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit() {
    this.weatherService
      .getWeather()
      .subscribe({ next: (data) => (this.weatherData = data) });
  }

  // { data: { City: "London", Country: "UK" } }
  handleEventClick({
    data: { City, Country },
  }: {
    data: { City: string; Country: string };
  }) {
    if (!City || !Country) {
      return;
    }
    this.city = City;
    this.country = Country;
    this.weatherService
      .getWeather({ city: City, country: Country, units: this.units })
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          this.weatherService.addToStore(`${City}${Country}${this.units}`, {
            ...(data as Object),
          });
        },
      });
  }

  clearStore() {
    this.weatherService.clearStore();
  }
}

{
  const numbers = [1, 2, [1, 2, [2, 3]]];
  const [first, second, [secondOne, , remainingArray], ...rest] = numbers;

  console.log(first);

  const weather = { data: { city: "London", country: "UK" } };

  const {
    data: { city },
  } = weather;

  interface Weather {
    data: {
      city: string;
      country: string;
      units: string;
    };
  }
  function printCity(input: Weather) {
    const city = input.data.city;
    console.log(city);
  }
}

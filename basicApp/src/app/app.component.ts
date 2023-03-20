import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Basic App';
  PI = Math.PI;
  imgSrc = 'https://http.cat/404';

  sayHello(name: string): string {
    return `Hello ${name}!`;
  }

  handleMyEvent(e: Event) {
    console.log(e);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngswitch';
   Cars: any[] = [
    {
      "name": "BMW",
      "age": 12,
      "color": 'blue'
    },
    {
      "name": "Mustang",
      "age": 5,
      "color": 'yellow'
    },
    {
      "name": "Range Rover",
      "age": 3,
      "color": 'silver'
    },
    {
      "name": "Ford Camaro",
      "age": 6,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 4,
      "color": 'green'
    }
  ];
}

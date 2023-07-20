import { Component } from '@angular/core';
import { Site } from '../Interfaces/sites';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
  teams: Site[] = [];
  rank: number = 23;
  constructor(private http: HttpClient) {
    this.getSites();
    this.getWeatherData();
  }

  // Add your code here
  getSites() {
    this.http
      .get('http://localhost:3000/sites/')
      .subscribe((resultData: any) => {
        console.log('response', resultData);
        this.teams = resultData;
      });
  }
  getWeatherData() {
    this.http
      .get('http://localhost:3000/weatherdata/')
      .subscribe((resultData: any) => {
        console.log('response', resultData);
        this.teams = resultData;
      });
  }
}

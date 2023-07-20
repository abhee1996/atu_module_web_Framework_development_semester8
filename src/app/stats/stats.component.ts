import { Component, OnInit } from '@angular/core';
import { SitedataService } from '../Services/sitedata/sitedata.service';
import { LivemapService } from '../Services/livemap/livemap.service';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  statics: any[] = [];
  nationalStatics: any[] = [];
  siteStatics: any[] = [];
  statsCopy: any[] = [];
  selected: string = '';
  displayedColumns: string[] = [
    'Air Temperature',
    'Road Surface Temperature',
    'Wind Speed',
  ];
  siteColumns: string[] = ['Coldest', 'Warmest', 'Windiest'];

  constructor(private service: LivemapService) {}
  public ds = [];
  ngOnInit(): void {
    this.getUserData();
  }
  getUserData() {
    this.service.gettiitrafficdata().subscribe({
      next: async (res: any) => {
        this.statics = await res.features;
        this.statsCopy = await [...this.statics];
        this.nationalStatics = this.maxMinAvgAirTemprature(this.statics);
      },
    });
  }

  maxMinAvgAirTemprature(arr: any[]) {
    var max = arr[0].properties.air_temperature;
    var min_air_tem_site = '';
    var min = arr[0].properties.air_temperature;
    var sum = arr[0].properties.air_temperature;
    var max_road = arr[0].properties.road_surface_temperature;
    var min_road = arr[0].properties.road_surface_temperature;
    var sum_road = arr[0].properties.road_surface_temperature;
    var min_rd_tem_site = '';

    var max_wind = arr[0].properties.wind_speed;
    var min_wind = arr[0].properties.wind_speed;
    var sum_wind = arr[0].properties.wind_speed;
    var max_wind_site = '';

    let air_temp = [];
    for (var i = 1; i < arr.length; i++) {
      air_temp.push(arr[i].properties.air_temperature);

      //max_air_temp
      if (
        arr[i].properties.air_temperature !== null &&
        arr[i].properties.air_temperature > max
      ) {
        max = arr[i].properties.air_temperature;
      }
      if (
        arr[i].properties.air_temperature !== null &&
        arr[i].properties.air_temperature < min
      ) {
        min = arr[i].properties.air_temperature;
        min_air_tem_site = arr[i].properties.site_name;
      }
      sum = sum + arr[i].properties.air_temperature;

      //max_road_temp
      if (
        arr[i].properties.road_surface_temperature !== null &&
        arr[i].properties.road_surface_temperature > max_road
      ) {
        max_road = arr[i].properties.road_surface_temperature;
      }
      if (
        arr[i].properties.road_surface_temperature !== null &&
        arr[i].properties.road_surface_temperature < min_road
      ) {
        min_road = arr[i].properties.road_surface_temperature;
        min_rd_tem_site = arr[i].properties.site_name;
      }
      sum_road = sum_road + arr[i].properties.road_surface_temperature;

      //wind_speed
      if (
        arr[i].properties.wind_speed !== null &&
        arr[i].properties.wind_speed > max_wind
      ) {
        max_wind = arr[i].properties.wind_speed;
      }
      if (
        arr[i].properties.wind_speed !== null &&
        arr[i].properties.wind_speed < min_wind
      ) {
        min_wind = arr[i].properties.wind_speed;
        max_wind_site = arr[i].properties.site_name;
      }
      sum_wind = sum_wind + arr[i].properties.wind_speed;
    }
    this.siteStatics = [
      [min_air_tem_site, min_rd_tem_site, max_wind_site],
      [min, max, max_wind],
    ];
    return [
      [max, min, sum / arr.length],
      [max_road, min_road, sum_road / arr.length],
      [max_wind, min_wind, sum_wind / arr.length],
    ];
  }
}

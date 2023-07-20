import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from "leaflet"
import { Observable } from 'rxjs';
import { Live, Lives } from 'src/app/live/lives';
export interface TodayInterface {
  site_name: string;
  air_temprature: string;
  road_temprature: number;
  wind_speed: number;
}
@Injectable({
  providedIn: 'root'
})
export class TodayService {
  today: Array<Live> = [];
  todayCopy: Array<Live> = [];
  selected:string =''
  baseURL:string ='http://localhost:3000/weatherdata/live'
  todaysitedatadetails:Array<Live>=[]
  constructor(private http: HttpClient) { 
  }

  getTodayData():Observable<Live[]>
  {

    return this.http.get<Live[]>(this.baseURL) 
   
  }
  onSelect() {
    console.log('selected',this.selected);
    this.todaysitedatadetails = this.todayCopy.filter((x:any) => x.site_name == this.selected );
  }
  
  sortSiteData(colName:any) {
    this.todayCopy.sort((a:any, b:any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
}

}

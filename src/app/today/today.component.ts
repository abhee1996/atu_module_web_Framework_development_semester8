import {
  Component,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TodayService } from '../Services/today/today.service';
import { HttpClient } from '@angular/common/http';
import { Live, Lives } from '../live/lives';
import {
  SortableHeaderDirective,
  SortEvent,
  compare,
} from '../sortable.directive';
import { FormBuilder } from '@angular/forms';
import { SortingInterface } from '../types/sorting.interface';
@Component({
  selector: 'today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent implements OnInit {
  constructor(
    private todayService: TodayService,
  ) {
    this.getData();
  }
   today: Array<Live> = [];
   todayCopy: Array<Live> = [];
  selected:string =''
  todaysitedatadetails:Array<Live>=[]
  displayedColumns: string[] = [
    'header',
  ];
   displayCols: string[] = [
     'site_name',
     'air_temperature',
     'road_surface_temperature',
     'wind_speed',
  ];
  

  
  ngOnInit(): void {
    this.getData();
  }
 
  columns = [
    {
      columnDef: 'site_name',
      header: 'Site Name',
      cell: (element: Live) => `${element.site_name}`,
    },
    {
      columnDef: 'air_temprature',
      header: 'Air Temprature',
      cell: (element: Live) => `${element.air_temperature}`,
    },
    {
      columnDef: 'road_surface_temperature',
      header: 'Road Temperature',
      cell: (element: Live) => `${element.road_surface_temperature}`,
    },
    {
      columnDef: 'wind_speed',
      header: 'Wind Speed',
      cell: (element: Live) => `${element.wind_speed}`,
    },
  ];
  onSelect() {
    this.todaysitedatadetails = this.todayCopy.filter((x:any) => x.site_name == this.selected );
  }
  sortSiteData(colName:any) {
    this.todayCopy.sort((a:any, b:any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
}
  getData(): void {
     this.todayService.getTodayData().subscribe((res: any) => {
       this.today = res;
       this.todayCopy = this.today.filter(
         (x: any) => x.datenow == '2023-03-01T00:00:00.000Z'
       )
    });
  }
}

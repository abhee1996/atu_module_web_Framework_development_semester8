import { Component , OnInit} from '@angular/core';
import { Live } from '../live/lives';
import { TodayService } from '../Services/today/today.service';
import { SortingInterface } from '../types/sorting.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todaysitedetails',
  templateUrl: './todaysitedetails.component.html',
  styleUrls: ['./todaysitedetails.component.css']
})
export class TodaysitedetailsComponent implements OnInit {
  today: Array<Live> = [];
  todaynew: Array<Live> = [];
  todaysitedatadetails:Array<Live>=[]
  sitename:any= ''
   
   displayedColumns: string[] = [
    'header',
  ];
   displayCols: string[] = [
     'site_name',
     'air_temperature',
     'road_surface_temperature',
     'wind_speed',
  ];
  constructor(
    private todayService: TodayService,
    private activeRoute: ActivatedRoute
  ) {
    this.getData();
  }
  selected: string = this.todayService.selected;
  sortSiteData(colName:any) {
    this.todaynew.sort((a:any, b:any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
}
  ngOnInit(): void {
    this.getData();
    this.sitename = this.activeRoute.snapshot.paramMap.get('site_name')
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

  getData(): void {
    this.todayService.getTodayData().subscribe((res: any) => {
      this.today = res;
       this.todaynew = this.today.filter(
         (x: any) => x.datenow == '2023-03-01T00:00:00.000Z'
       );
      this.todaysitedatadetails = this.todaynew.filter((x:any) => x.site_name == this.sitename );

    });
  }
}

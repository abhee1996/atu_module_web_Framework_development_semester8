import { Component, OnInit } from '@angular/core';
import { SitedataService } from '../Services/sitedata/sitedata.service';
let fc = [
  'M1 Dublin Airport',

  'M1 Balbriggan',

  'M1 Drogheda Bypass',

  'M1 Braganstown',

  'M1 Dromad',

  'M2 Ashbourne',

  'N2 Funshog',

  'N2 Reaghstown',

  'N2 Cloghan',

  'N2 Emyvale',

  'Old N2 Annayella',

  'M3 Kilcarn',

  'N3 Kells',

  'N3 Cavan',

  "N3 Butler's Bridge",

  'M4 Maynooth',

  'M4 Enfield',

  'N4 Mullingar',

  'N4 Ballinalack',

  'N4 Longford',

  'N4 Carrick on Shannon',

  'N4 Collooney Bypass',

  'N5 Charlestown II',

  'N5 Westport',

  'M6 Miltown Pass',

  'N6 Kilbeggan',

  'M6 Athlone Bypass',

  'M6 West Ballinasloe',

  'M6 Glennascaul',

  'N7 Naas',

  'M7 Newbridge Bypass',

  'M7 Kildare',

  'M7 Portlaoise Bypass',

  'M7 Mountrath',

  'M7 Rathnavogue',

  'M7 Nenagh',

  'M7 Birdhill',

  'N8 Two Mile Borris',

  'M8 Cahir',

  'M8 Mitchelstown NE',

  'M8 Corrin Interchange',

  'M8 Toll Plaza',

  'M9 Killcullen',

  'M9 Carlow',

  'M9 Gowran',

  'M9 Mullinavat',

  'N10 Kilkenny',

  'M11 Bray Bypass',

  'N11 Glen of the Downs',

  'M11 Westbrook',

  'N11 Arklow Bypass',

  'N11 Enniscorthy',

  'M11 Knockrathkyle',

  'N13 Grianan Of Aileach',
  'N15 Bundoran',

  'N15 Lough Mourne',

  'N15 Kilygordon',

  'N16 Glencar',

  'M17 Athenry',

  'N17 Tuam',

  'N17 Knock',

  'M18 Cloneen',

  'M18 Crusheen',

  'N18 Bunratty',

  'Clonmacken Link Road',

  'Limerick Tunnel South',

  'N20 Rathduff',

  'N20 Charleville',

  'N21 Abbeyfeale',

  'N21 Rathkeale Bypass',

  'N22 Killarney',

  'N22 Ballyvourney',

  'N22 Macroom',

  'N24 Clonmel Relief Rd',

  'N24 Pallas Grean',

  'N25 Midleton Bypass',

  'N25 Dungarvan',

  'N25 Kilmacthomas',

  'N25 Waterford Bypass',

  'N25 New Ross',

  'N25 Wexford',

  'N40 Curraheen',

  'M50 Dublin Airport',

  'M50 Blanchardstown',

  'M50 Ballymount',

  'M50 Leopardstown',

  'M50 Sandyford',

  'N52 Fivealley',

  'N53 Deerpark',

  'N55 Granard',

  'N56 Gweedore',

  'N56 Ardara',

  'N59 Crossmolina',

  'N59 Connemara',

  'N61 Elphin',

  'N63 Roscommon',

  'N67 Corkscrewhill',

  'N68 Kilrush',

  'N70 Waterville',

  'N71 Leap',

  'N72 Fermoy',

  'N80 Killeigh',

  'N81 Tallaght',

  'N81 Baltinglass',

  'N84 Cloonboo',

  'R113 Sandyford',

  'Dublin Tunnel',

  'R445 Ballywilliam',

  'R445 Roscrea',

  'R667 Mitchelstown',
];

@Component({
  selector: 'dailystats',
  templateUrl: './dailystats.component.html',
  styleUrls: ['./dailystats.component.css'],
})
export class DailystatsComponent implements OnInit {
  dailystats: any[] = [];
  dailystatsCopy: any[] = [];
  selected: string = '';
  selecteddate: string = '';
  dailystatsArray: string[] = [];
  displayedColumns: string[] = ['header'];
  constructor(private service: SitedataService) {}

  displayCols: string[] = [
    'datenow',
    'site_name',
    'air_temperature',
    'road_surface_temperature',
    'wind_speed',
  ];
  ngOnInit(): void {
    this.dailystatsArray = fc;
    this.getUserData();
  }
  onSelect() {
    this.dailystatsCopy = this.dailystats.filter(
      (x: any) => x.site_name == this.selected
    );
  }
  onSelectDate() {
    this.dailystatsCopy = this.dailystats.filter(
      (x: any) => x.site_name == this.selecteddate
    );
  }

  getUserData() {
    this.service.getData().subscribe({
      next: async (res: any) => {
        this.dailystats = await res;
        this.dailystatsCopy = await res;
      },
    });
  }
  goDailyStats() {
    this.dailystatsCopy = this.maxMinAvgAirTemprature(this.dailystats);
  }

  maxMinAvgAirTemprature(arr: any[]) {
    var max= arr[0].air_temperature;
    var min_air_tem_site = '';
    var min= arr[0].air_temperature;
    var sum= arr[0].air_temperature;

   
    for (var i = 1; i < arr.length; i++) {
      if (
        arr[i].datenow.slice(0, 10) == this.selecteddate &&
        arr[i].site_name == this.selected
      ){

        if (
          arr[i].air_temperature !== null &&
          arr[i].air_temperature > max
        ) {
          max = arr[i].air_temperature;
        }
      if (
        arr[i].air_temperature !== null &&
        arr[i].air_temperature < min
      ) {
        min = arr[i].air_temperature;
        min_air_tem_site = arr[i].site_name;
      }
      sum = sum + arr[i].air_temperature;
      }
        
    }
    
    return [max, min, sum / arr.length];
  }
}

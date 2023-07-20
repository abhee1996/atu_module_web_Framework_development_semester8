import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { SitedataService } from '../Services/sitedata/sitedata.service';
export interface siteData {
  datetime: string;
  site_name: string;
  airtemprature: number;
  roadtemprature: number;
  windspeed: number;
}
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
  selector: 'sitedata',
  templateUrl: './sitedata.component.html',
  styleUrls: ['./sitedata.component.scss'],
})
export class SitedataComponent implements OnInit {
  sitedata: any[] = [];
  sitedataCopy: any[] = [];
  selected: string = '';
  sitedataArray: string[] = [];
  displayedColumns: string[] = ['header'];
  displayCols: string[] = [
    'datenow',
    'site_name',
    'air_temperature',
    'road_surface_temperature',
    'wind_speed',
  ];
  dataSource!: MatTableDataSource<siteData>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(private service: SitedataService) {}
  ngOnInit(): void {
    this.getUserData();
    this.sitedataArray = fc;
  }
  onSelect() {
    this.sitedataCopy = this.sitedata.filter(
      (x: any) => x.site_name == this.selected
    );
  }
  sortSiteData(colName: any) {
    this.sitedataCopy.sort((a, b) =>
      a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0
    );
  }
  getUserData() {
    this.service.getData().subscribe({
      next: async (res: any) => {
        this.sitedata = await res;
        this.sitedataCopy = await res;
        this.dataSource = new MatTableDataSource(this.sitedata);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  removeFilter() {
    this.selected = '';
    for (let i = 0; i < this.sitedata.length; i++) {
      this.sitedataCopy = this.sitedata.filter(
        (x: any) => x.features[i].properties.site_name == this.selected
      );
      console.log(this.selected);
      this.sitedataCopy = [...this.sitedata];
      console.log(this.sitedataCopy);
    }
  }
}

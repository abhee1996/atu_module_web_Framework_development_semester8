import { Component } from '@angular/core';
import { LivemapService } from '../Services/livemap/livemap.service';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl:iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl, 
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon=iconDefault

@Component({
  selector: 'livemap',
  templateUrl: './livemap.component.html',
  styleUrls: ['./livemap.component.css']
})
export class LivemapComponent {
  private map: any;
  constructor(private LivemapService: LivemapService,private http: HttpClient) { 

  }

 
 private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  } 
  
  ngAfterViewInit(): void {
    this.initMap();
    this.LivemapService.makeCapitalMarkers(this.map);

   }
}

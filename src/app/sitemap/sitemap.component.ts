import { Component, OnInit ,AfterViewInit} from '@angular/core';

import * as L from 'leaflet';
import { Site } from '../Interfaces/sites';
import { HttpClient } from '@angular/common/http';
import { SitemapMarkerService } from '../Services/sitemap-marker/sitemap-marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl:iconRetinaUrl,
  iconUrl: iconUrl,//'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
  shadowUrl: shadowUrl, //'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon=iconDefault

@Component({
  selector: 'sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css'],
})
export class SitemapComponent implements AfterViewInit {
  private map: any;
  constructor(private markerService: SitemapMarkerService,private http: HttpClient) { 

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
    this.markerService.makeCapitalMarkers(this.map);

   }

 

 
}

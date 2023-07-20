import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class SitemapMarkerService {
  pins:string ='http://localhost:3000/sites/'
  constructor(private http: HttpClient) { }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.pins).subscribe((res: any) => {
      console.log('res', res)
      for (const c of res) {
        const lon = c.lng;
        const lat = c.lat;
         const marker = L.marker([lat, lon],{
          title:c.site_name,
         }
        );
        
         marker.addTo(map).bindPopup(`<b style="display:flex;justify-content:center;">${c.site_name}</b> [${lat},${lon}]`);
      //   const circle = L.circleMarker([lat, lon]);
      
      // circle.addTo(map);
      }
    });
   
  }
}



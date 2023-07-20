import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
@Injectable({
  providedIn: 'root',
})
export class LivemapService {
  liveData: string = 'http://localhost:3000/sites/';
  tiiliveData: string = 'https://tiitrafficdata.azurewebsites.net/api/weather';

  constructor(private http: HttpClient) {}
  makeCapitalMarkers(map: L.Map): void {
    let marker: any;
    let siteName: any;
    let siteImage: any;
    let windSpeed: any;
    let airTemprature: any;

    let tiitraf = this.http.get(this.tiiliveData).subscribe((res: any) => {
      for (const c of res.features) {
        siteName = c.properties.site_name;
        siteImage = c.properties.camera_image;
        windSpeed = c.properties.wind_speed;
        airTemprature = c.properties.air_temprature;
      }
    });

    this.http.get(this.liveData).subscribe((res: any) => {
      for (const c of res) {
        const lon = c.lng;
        const lat = c.lat;
        marker = L.marker([lat, lon], { title: c.site_name });

        marker.addTo(map)
          .bindPopup(`<b style="display:flex;justify-content:center;">${c.site_name}</b> [${lat},${lon}]<br/>
              <p>${airTemprature}</p>
              <p>${windSpeed}</p>
              <p>${airTemprature}</p>
              <img style="width: 100px;height: 100px;" src={siteImage} alt=""/>

              `);
      }
    });

  }

  gettiitrafficdata() {
 
   return  this.http.get(this.tiiliveData)
  }
}

import { Component } from '@angular/core';
import { Site } from '../Interfaces/sites';
import { HttpClient } from '@angular/common/http';
import { SiteServiceService } from '../Services/siteServices/site-service.service';

@Component({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
})
export class SitesComponent {
  sites: Site[] = [];
  rank: number = 23;
  pinarr: any = [];
  constructor(private SiteService: SiteServiceService) {
    this.getSites();
  }
  // Add your code here
  getSites() {
    this.SiteService.getData().subscribe((resultData: any) => {
      this.sites = resultData;
    });
  }
}

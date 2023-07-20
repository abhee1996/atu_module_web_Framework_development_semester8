import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutesComponent } from './routes/routes.component';
import { SitesComponent } from './sites/sites.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { TodayComponent } from './today/today.component';
import { LiveComponent } from './live/live.component';
import { LivemapComponent } from './livemap/livemap.component';
import { SitedataComponent } from './sitedata/sitedata.component';
import { StatsComponent } from './stats/stats.component';
import { DailystatsComponent } from './dailystats/dailystats.component';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { SitemapMarkerService } from './Services/sitemap-marker/sitemap-marker.service';
import { TodayService } from './Services/today/today.service';
import { SortableHeaderDirective } from './sortable.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SortDirective } from './directive/sort.directive';
import { TodaysitedetailsComponent } from './todaysitedetails/todaysitedetails.component';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutesComponent,
    SitesComponent,
    SitemapComponent,
    TodayComponent,
    LiveComponent,
    LivemapComponent,
    SitedataComponent,
    StatsComponent,
    DailystatsComponent,
    SortableHeaderDirective,
    SortDirective,
    TodaysitedetailsComponent,
    SearchfilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LeafletMarkerClusterModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    //material
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,


    RouterModule.forRoot([
      {
        path:'',
         component:RoutesComponent,
      },
       {
         path:'sites',
         component:SitesComponent
       },
       {
         path:'sitemap',
         component:SitemapComponent
       },
       {
         path:'today',
         component:TodayComponent,
       },
       {
         path:'live',
         component:LiveComponent,
       },
       {
         path:'livemap',
         component:LivemapComponent,
       },
       {
         path:'sitedata',
         component:SitedataComponent,
       },
       {
         path:'stats',
         component:StatsComponent,
       },
       {
         path:'dailystats',
         component:DailystatsComponent,
       },
     
       {
         path:'sitedetails/:site_name',
         component:TodaysitedetailsComponent,
       },
      {
        path:'**',
        component:RoutesComponent
      }
    ])
  ],
  providers: [
    SitemapMarkerService,
    TodayService,
    
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { TestBed } from '@angular/core/testing';

import { SitemapMarkerService } from './sitemap-marker.service';

describe('SitemapMarkerService', () => {
  let service: SitemapMarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitemapMarkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

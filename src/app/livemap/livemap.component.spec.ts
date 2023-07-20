import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivemapComponent } from './livemap.component';

describe('LivemapComponent', () => {
  let component: LivemapComponent;
  let fixture: ComponentFixture<LivemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

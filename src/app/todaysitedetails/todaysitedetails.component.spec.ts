import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysitedetailsComponent } from './todaysitedetails.component';

describe('TodaysitedetailsComponent', () => {
  let component: TodaysitedetailsComponent;
  let fixture: ComponentFixture<TodaysitedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysitedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysitedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

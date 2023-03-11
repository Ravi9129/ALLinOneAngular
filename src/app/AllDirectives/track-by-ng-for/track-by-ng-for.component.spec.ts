import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByNgForComponent } from './track-by-ng-for.component';

describe('TrackByNgForComponent', () => {
  let component: TrackByNgForComponent;
  let fixture: ComponentFixture<TrackByNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackByNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackByNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

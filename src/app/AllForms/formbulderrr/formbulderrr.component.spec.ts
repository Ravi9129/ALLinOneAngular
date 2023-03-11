import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbulderrrComponent } from './formbulderrr.component';

describe('FormbulderrrComponent', () => {
  let component: FormbulderrrComponent;
  let fixture: ComponentFixture<FormbulderrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbulderrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormbulderrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

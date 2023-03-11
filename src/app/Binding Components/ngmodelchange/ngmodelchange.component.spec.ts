import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelchangeComponent } from './ngmodelchange.component';

describe('NgmodelchangeComponent', () => {
  let component: NgmodelchangeComponent;
  let fixture: ComponentFixture<NgmodelchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodelchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmodelchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

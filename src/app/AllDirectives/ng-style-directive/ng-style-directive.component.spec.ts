import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleDirectiveComponent } from './ng-style-directive.component';

describe('NgStyleDirectiveComponent', () => {
  let component: NgStyleDirectiveComponent;
  let fixture: ComponentFixture<NgStyleDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

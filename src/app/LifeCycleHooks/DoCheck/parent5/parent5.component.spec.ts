import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent5Component } from './parent5.component';

describe('Parent5Component', () => {
  let component: Parent5Component;
  let fixture: ComponentFixture<Parent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationComponent } from './interpolation.component';

describe('InterpolationComponent, firstname, lastname, giveMeRed and itemImageUrl', () => {
  let component: InterpolationComponent;
  let fixture: ComponentFixture<InterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a firstname', () => {
    expect(firstname).toBe('Ravi');
  });

  it('should have a lastname', () => {
    expect(lastname).toBe('Rajput');
  });

  it('should have giveMeRed', () => {
    expect(giveMeRed).toBe('red flowers');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDirectivessComponent } from './all-directivess.component';

describe('AllDirectivessComponent', () => {
  let component: AllDirectivessComponent;
  let fixture: ComponentFixture<AllDirectivessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDirectivessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDirectivessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpipessComponent } from './allpipess.component';

describe('AllpipessComponent', () => {
  let component: AllpipessComponent;
  let fixture: ComponentFixture<AllpipessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpipessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpipessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

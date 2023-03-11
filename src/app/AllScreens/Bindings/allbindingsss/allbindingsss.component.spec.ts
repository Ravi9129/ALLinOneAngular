import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbindingsssComponent } from './allbindingsss.component';

describe('AllbindingsssComponent', () => {
  let component: AllbindingsssComponent;
  let fixture: ComponentFixture<AllbindingsssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbindingsssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllbindingsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

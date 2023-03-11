import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllformmssComponent } from './allformmss.component';

describe('AllformmssComponent', () => {
  let component: AllformmssComponent;
  let fixture: ComponentFixture<AllformmssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllformmssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllformmssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

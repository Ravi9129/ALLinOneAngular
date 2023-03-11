import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhookssComponent } from './allhookss.component';

describe('AllhookssComponent', () => {
  let component: AllhookssComponent;
  let fixture: ComponentFixture<AllhookssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllhookssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllhookssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

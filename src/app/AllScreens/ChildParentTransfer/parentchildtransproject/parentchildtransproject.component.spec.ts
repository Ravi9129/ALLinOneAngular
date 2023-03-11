import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchildtransprojectComponent } from './parentchildtransproject.component';

describe('ParentchildtransprojectComponent', () => {
  let component: ParentchildtransprojectComponent;
  let fixture: ComponentFixture<ParentchildtransprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentchildtransprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentchildtransprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildssComponent } from './parent-childss.component';

describe('ParentChildssComponent', () => {
  let component: ParentChildssComponent;
  let fixture: ComponentFixture<ParentChildssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentChildssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

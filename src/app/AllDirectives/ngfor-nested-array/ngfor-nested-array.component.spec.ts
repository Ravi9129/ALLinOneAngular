import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforNestedArrayComponent } from './ngfor-nested-array.component';

describe('NgforNestedArrayComponent', () => {
  let component: NgforNestedArrayComponent;
  let fixture: ComponentFixture<NgforNestedArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforNestedArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforNestedArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

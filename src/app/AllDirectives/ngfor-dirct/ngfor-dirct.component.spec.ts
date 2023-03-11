import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforDirctComponent } from './ngfor-dirct.component';

describe('NgforDirctComponent', () => {
  let component: NgforDirctComponent;
  let fixture: ComponentFixture<NgforDirctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforDirctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforDirctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpipeComponent } from './mainpipe.component';

describe('MainpipeComponent', () => {
  let component: MainpipeComponent;
  let fixture: ComponentFixture<MainpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

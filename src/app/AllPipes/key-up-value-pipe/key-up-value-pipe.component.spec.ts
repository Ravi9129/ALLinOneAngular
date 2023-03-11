import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpValuePipeComponent } from './key-up-value-pipe.component';

describe('KeyUpValuePipeComponent', () => {
  let component: KeyUpValuePipeComponent;
  let fixture: ComponentFixture<KeyUpValuePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyUpValuePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyUpValuePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

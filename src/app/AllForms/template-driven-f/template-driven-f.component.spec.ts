import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFComponent } from './template-driven-f.component';

describe('TemplateDrivenFComponent', () => {
  let component: TemplateDrivenFComponent;
  let fixture: ComponentFixture<TemplateDrivenFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

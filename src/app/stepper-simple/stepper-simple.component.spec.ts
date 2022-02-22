import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperSimpleComponent } from './stepper-simple.component';

describe('StepperSimpleComponent', () => {
  let component: StepperSimpleComponent;
  let fixture: ComponentFixture<StepperSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

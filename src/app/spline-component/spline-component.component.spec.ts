import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplineComponentComponent } from './spline-component.component';

describe('SplineComponentComponent', () => {
  let component: SplineComponentComponent;
  let fixture: ComponentFixture<SplineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplineComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

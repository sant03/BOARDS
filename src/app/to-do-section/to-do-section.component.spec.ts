import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSectionComponent } from './to-do-section.component';

describe('ToDoSectionComponent', () => {
  let component: ToDoSectionComponent;
  let fixture: ComponentFixture<ToDoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

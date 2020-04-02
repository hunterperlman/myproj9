import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSetComponent } from './employee-set.component';

describe('EmployeeSetComponent', () => {
  let component: EmployeeSetComponent;
  let fixture: ComponentFixture<EmployeeSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

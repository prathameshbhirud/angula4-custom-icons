import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ic2Component } from './ic2.component';

describe('Ic2Component', () => {
  let component: Ic2Component;
  let fixture: ComponentFixture<Ic2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ic2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

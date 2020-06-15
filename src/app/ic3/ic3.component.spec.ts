import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ic3Component } from './ic3.component';

describe('Ic3Component', () => {
  let component: Ic3Component;
  let fixture: ComponentFixture<Ic3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ic3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

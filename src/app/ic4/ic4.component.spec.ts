import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ic4Component } from './ic4.component';

describe('Ic4Component', () => {
  let component: Ic4Component;
  let fixture: ComponentFixture<Ic4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ic4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ic4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

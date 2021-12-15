import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roue6Component } from './roue6.component';

describe('Roue6Component', () => {
  let component: Roue6Component;
  let fixture: ComponentFixture<Roue6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Roue6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Roue6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemon1Component } from './pokemon1.component';

describe('Pokemon1Component', () => {
  let component: Pokemon1Component;
  let fixture: ComponentFixture<Pokemon1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pokemon1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pokemon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

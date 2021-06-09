import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemon2Component } from './pokemon2.component';

describe('Pokemon2Component', () => {
  let component: Pokemon2Component;
  let fixture: ComponentFixture<Pokemon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pokemon2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pokemon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

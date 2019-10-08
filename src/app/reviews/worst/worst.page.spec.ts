import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstPage } from './worst.page';

describe('WorstPage', () => {
  let component: WorstPage;
  let fixture: ComponentFixture<WorstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorstPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

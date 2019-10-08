import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesPage } from './releases.page';

describe('ReleasesPage', () => {
  let component: ReleasesPage;
  let fixture: ComponentFixture<ReleasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

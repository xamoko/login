import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelComponent } from './multilevel.component';

describe('MultilevelComponent', () => {
  let component: MultilevelComponent;
  let fixture: ComponentFixture<MultilevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

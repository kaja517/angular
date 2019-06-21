import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddelectronicComponent } from './addelectronic.component';

describe('AddelectronicComponent', () => {
  let component: AddelectronicComponent;
  let fixture: ComponentFixture<AddelectronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddelectronicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddelectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

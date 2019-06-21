import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleelectronicComponent } from './singleelectronic.component';

describe('SingleelectronicComponent', () => {
  let component: SingleelectronicComponent;
  let fixture: ComponentFixture<SingleelectronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleelectronicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleelectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

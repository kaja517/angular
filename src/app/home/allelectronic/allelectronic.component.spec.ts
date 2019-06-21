import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllelectronicComponent } from './allelectronic.component';

describe('AllelectronicComponent', () => {
  let component: AllelectronicComponent;
  let fixture: ComponentFixture<AllelectronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllelectronicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllelectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

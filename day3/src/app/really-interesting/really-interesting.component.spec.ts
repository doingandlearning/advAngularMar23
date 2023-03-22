import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallyInterestingComponent } from './really-interesting.component';

describe('ReallyInterestingComponent', () => {
  let component: ReallyInterestingComponent;
  let fixture: ComponentFixture<ReallyInterestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReallyInterestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReallyInterestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

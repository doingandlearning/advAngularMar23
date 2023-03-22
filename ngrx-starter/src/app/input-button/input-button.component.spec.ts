import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonComponent } from './input-button.component';

describe('InputButtonComponent', () => {
  let component: InputButtonComponent;
  let fixture: ComponentFixture<InputButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the @Input value', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('');
    component.message = 'Hi there';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('Hi there');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOpComponent } from './new-op.component';

describe('NewOpComponent', () => {
  let component: NewOpComponent;
  let fixture: ComponentFixture<NewOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

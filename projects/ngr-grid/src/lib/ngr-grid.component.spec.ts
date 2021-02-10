import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrGridComponent } from './ngr-grid.component';

describe('NgrGridComponent', () => {
  let component: NgrGridComponent;
  let fixture: ComponentFixture<NgrGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

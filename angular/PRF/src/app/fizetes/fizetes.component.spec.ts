import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizetesComponent } from './fizetes.component';

describe('FizetesComponent', () => {
  let component: FizetesComponent;
  let fixture: ComponentFixture<FizetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

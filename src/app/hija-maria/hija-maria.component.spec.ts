import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijaMariaComponent } from './hija-maria.component';

describe('HijaMariaComponent', () => {
  let component: HijaMariaComponent;
  let fixture: ComponentFixture<HijaMariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijaMariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijaMariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

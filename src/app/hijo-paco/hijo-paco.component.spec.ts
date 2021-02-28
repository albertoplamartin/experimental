import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPacoComponent } from './hijo-paco.component';

describe('HijoPacoComponent', () => {
  let component: HijoPacoComponent;
  let fixture: ComponentFixture<HijoPacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoPacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

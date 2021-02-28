import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiemntalCacheComponentComponent } from './experiemntal-cache-component.component';

describe('ExperiemntalCacheComponentComponent', () => {
  let component: ExperiemntalCacheComponentComponent;
  let fixture: ComponentFixture<ExperiemntalCacheComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiemntalCacheComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiemntalCacheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

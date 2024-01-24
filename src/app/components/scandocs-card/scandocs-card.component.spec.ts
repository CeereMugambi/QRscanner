import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScandocsCardComponent } from './scandocs-card.component';

describe('ScandocsCardComponent', () => {
  let component: ScandocsCardComponent;
  let fixture: ComponentFixture<ScandocsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScandocsCardComponent]
    });
    fixture = TestBed.createComponent(ScandocsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

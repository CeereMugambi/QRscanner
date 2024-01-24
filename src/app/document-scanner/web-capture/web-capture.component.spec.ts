import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCaptureComponent } from './web-capture.component';

describe('WebCaptureComponent', () => {
  let component: WebCaptureComponent;
  let fixture: ComponentFixture<WebCaptureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebCaptureComponent]
    });
    fixture = TestBed.createComponent(WebCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

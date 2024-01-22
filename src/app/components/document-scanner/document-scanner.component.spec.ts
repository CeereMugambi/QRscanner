import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentScannerComponent } from './document-scanner.component';

describe('DocumentScannerComponent', () => {
  let component: DocumentScannerComponent;
  let fixture: ComponentFixture<DocumentScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentScannerComponent]
    });
    fixture = TestBed.createComponent(DocumentScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrdataService {

  constructor() { }
  // Add a new BehaviorSubject for the QR code image data
  private qrCodeImageSubject = new BehaviorSubject<string>('');
  qrCodeImage$ = this.qrCodeImageSubject.asObservable();

  // Method to set the QR code image data
  setQRCodeImage(image: string): void {
    this.qrCodeImageSubject.next(image);
  }
}

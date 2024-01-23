import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  // Use BehaviorSubject with a default WebcamImage as the initial value
  private capturedImageSubject: BehaviorSubject<WebcamImage | null> = new BehaviorSubject<WebcamImage | null>(null);

  // Method to send the captured image to other components
  sendCapturedImage(image: WebcamImage): void {
    this.capturedImageSubject.next(image);
  }

  // Observable to subscribe to in other components
  getCapturedImage(): Observable<WebcamImage | null> {
    return this.capturedImageSubject.asObservable().pipe(
      tap((image) => console.log('ImageService: Captured image emitted', image))
    );
  }
}

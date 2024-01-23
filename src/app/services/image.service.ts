import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  private capturedImageSubject: Subject<WebcamImage> = new Subject<WebcamImage>();

  // Method to send the captured image to other components
  sendCapturedImage(image: WebcamImage): void {
    this.capturedImageSubject.next(image);
  }

  // Observable to subscribe to in other components
  getCapturedImage(): Observable<WebcamImage> {
    return this.capturedImageSubject.asObservable();
}
}

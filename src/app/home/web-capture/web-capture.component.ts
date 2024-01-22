import { Component } from '@angular/core';
import {WebcamImage} from 'ngx-webcam'; 
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-web-capture',
  templateUrl: './web-capture.component.html',
  styleUrls: ['./web-capture.component.scss']
})
export class WebCaptureComponent {
  title = 'Web Capture'; 
  
  webcamImage!: WebcamImage; 
  private trigger: Subject<void> = new Subject<void>(); 
  triggerSnapshot(): void { 
   this.trigger.next(); 
  } 
  handleImage(webcamImage: WebcamImage): void { 
   console.info('Saved webcam image', webcamImage); 
   this.webcamImage = webcamImage; 
  } 
   
  public get triggerObservable(): Observable<void> { 
   return this.trigger.asObservable(); 
  } 
}


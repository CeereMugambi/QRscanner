import { Component } from '@angular/core';
import {WebcamImage} from 'ngx-webcam'; 
import { Router } from '@angular/router';
import {Subject, Observable} from 'rxjs';
import { ImageService } from 'src/app/services';

@Component({
  selector: 'app-web-capture',
  templateUrl: './web-capture.component.html',
  styleUrls: ['./web-capture.component.scss']
})
export class WebCaptureComponent {
  title = 'Web Capture'; 
  
  webcamImage!: WebcamImage; 
  private trigger: Subject<void> = new Subject<void>(); 

  constructor(private imageService: ImageService,private router:Router){}

  triggerSnapshot(): void { 
   this.trigger.next(); 
  } 
  handleImage(webcamImage: WebcamImage): void { 
   console.info('Saved webcam image', webcamImage); 
   this.webcamImage = webcamImage; 
   
   // Send the captured image to other components via the service
   this.imageService.sendCapturedImage(webcamImage);
   this.router.navigate(['scan-dialog']);
  } 
   
  public get triggerObservable(): Observable<void> { 
   return this.trigger.asObservable(); 
  } 
}


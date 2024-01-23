import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { ImageService } from 'src/app/services';

@Component({
  selector: 'app-scan-dialog',
  templateUrl: './scan-dialog.component.html',
  styleUrls: ['./scan-dialog.component.scss']
})
export class ScanDialogComponent {
  capturedImage: WebcamImage | null = null;
  webcamImage!: WebcamImage; 

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    // Subscribe to the ImageService to get the captured image
    this.imageService.getCapturedImage().subscribe((image: WebcamImage) => {
      this.capturedImage = image;
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {
  constructor(private router: Router) {}
  onFileSelected(event: any) {
    const file = event.target.files[0];
  }
  
  onScanButtonClick(): void {
      // Navigate to the route where the webcam feature is implemented
      this.router.navigate(['generator']);
      console.log("clicked")
}
}

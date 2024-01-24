import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docScanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {
  constructor(private router: Router) {}  
  onScanButtonClick(): void {
      // Navigate to the route where the webcam feature is implemented
      this.router.navigate(['select-page']);
      console.log("clicked")
}
}

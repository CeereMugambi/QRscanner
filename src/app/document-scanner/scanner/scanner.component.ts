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
}

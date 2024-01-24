import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scandocs-card',
  templateUrl: './scandocs-card.component.html',
  styleUrls: ['./scandocs-card.component.scss']
})
export class ScandocsCardComponent {
  constructor(private router: Router) {}  
  onScanButtonClick(): void {
      // Navigate to the route where the webcam feature is implemented
      this.router.navigate(['select-page']);
      console.log("clicked")
}
}

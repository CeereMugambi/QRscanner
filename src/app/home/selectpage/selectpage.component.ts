import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectpage',
  templateUrl: './selectpage.component.html',
  styleUrls: ['./selectpage.component.scss']
})
export class SelectpageComponent {
  selectedUser!: string;

  constructor(private router: Router,private snackBar:MatSnackBar) {}

  proceed() {
    if (this.selectedUser === 'Staff') {
      this.router.navigate(['/web-capture']); //change route to qrscanner to be implemented
    } else if (this.selectedUser === 'Customer') {
      this.router.navigate(['/generator']) //route to documentslist of qr
    } else {
      this.openSnackBar('Please kindly select a user.');
    }
  }
  openSnackBar(message: string){
    this.snackBar.open(message,'close'), {
      duration: 3000,
      panelClass: ['red-snackbar'],
      };
}
}
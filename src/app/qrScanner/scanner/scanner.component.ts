import { Component ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { QrdataService } from 'src/app/services/qrdata/qrdata.service';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent  implements OnDestroy{
  qrCodeImage: string = '';
  private qrCodeImageSubscription: Subscription;

  constructor(private qrdataService: QrdataService) {
   // Subscribe to changes in the QR code image data
   this.qrCodeImageSubscription = this.qrdataService.qrCodeImage$.subscribe(
    (image: string) => {
      this.qrCodeImage = image;
    }
  );
}

ngOnDestroy(): void {
  // Unsubscribe to avoid memory leaks
  this.qrCodeImageSubscription.unsubscribe();
}
}

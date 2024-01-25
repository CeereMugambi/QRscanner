import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { QrdataService } from 'src/app/services/qrdata/qrdata.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  // Output event emitter for scanned QR code parameters
  @Output() qrScanned: EventEmitter<any> = new EventEmitter<any>();
  public params: any;
  public ticketId: string = '';
  public token: string = '';
  public initial_state = {
    allowEmptyString: true,
    errorCorrectionLevel: "L",
    alt: "A custom alt attribute",
    ariaLabel: `QR Code image with the following content...`,
    colorDark: "#000000ff",
    colorLight: "#ffffffff",
    cssClass: "center",
    imageSrc: "./assets/angular-logo.png",
    imageHeight: 75,
    imageWidth: 75,
    margin: 4,
    qrdata: '',
    scale: 1,
    width: 300,
  };

  constructor(private dataService: DataService,private qrdataService:QrdataService) { }

  ngOnInit(): void {
    this.params = {
      ticketId: this.ticketId,
      token: this.token,
    };

    this.dataService.getParams(this.params).subscribe(
      (data) => {
        this.params = data.params !== undefined ? data.params : data;
        if (this.params) {
          this.initial_state.qrdata = this.serializeParams(this.params);

         // Set the QR code image data in the shared service
         this.qrdataService.setQRCodeImage(this.initial_state.qrdata);

          this.qrScanned.emit(this.params); // Emit event when QR is scanned
        } else {
          console.error('Params is undefined');
        }
      },
      (error) => {
        console.error('Error fetching params:', error);
      }
    );
  }

  serializeParams(params: any): string {
    return encodeURIComponent(JSON.stringify(params));
  }

  // Subscribe to the qrScanned event and handle it
  handleQrScanned(scannedParams: any): void {
    // Serialize the parameters before displaying or storing
    const serializedParams = this.serializeParams(scannedParams);
    
    // Optionally, you can also store it in sessionStorage
    sessionStorage.setItem('QR Scanned. Params:', serializedParams);

    // Display or store the serialized parameters
    console.log('QR Scanned. Params:', serializedParams);
  }
}

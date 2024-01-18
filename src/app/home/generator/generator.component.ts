import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"
import { SafeUrl } from "@angular/platform-browser"
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})


export class GeneratorComponent {
  public initial_state = {
    allowEmptyString: true,
    alt: "A custom alt attribute",
    ariaLabel: `QR Code image with the following content...`,
    colorDark: "#000000ff",
    colorLight: "#ffffffff",
    cssClass: "center",
    // elementType: "canvas" as QRCodeElementType,
    // errorCorrectionLevel: "M" as QRCodeErrorCorrectionLevel,
    imageSrc: "./assets/angular-logo.png",
    imageHeight: 75,
    imageWidth: 75,
    margin: 4,
    qrdata: "https://github.com/Cordobo/angularx-qrcode",
    scale: 1,
    version: undefined,
    title: "A custom title attribute",
    width: 300,
  }


}

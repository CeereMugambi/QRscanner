import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanDialogComponent } from './scan-dialog/scan-dialog.component';
import { ScannerComponent } from './scanner/scanner.component';
import { WebCaptureComponent } from './web-capture/web-capture.component';

const routes: Routes = [
  {path: 'scan-dialog',component:ScanDialogComponent},
  {path: 'scanner',component:ScannerComponent},
  {path: 'web-capture',component:WebCaptureComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentScannerRoutingModule { }

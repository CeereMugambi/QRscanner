import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scanner/scanner.component';
import { ScanDialogComponent } from './scan-dialog/scan-dialog.component';

const routes: Routes = [
  {path: 'doc-scanner',component:ScannerComponent},
  {path: 'scan-dialog',component:ScanDialogComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentScannerRoutingModule { }

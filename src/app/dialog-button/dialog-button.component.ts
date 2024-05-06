import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dialog-button',
  templateUrl: './dialog-button.component.html',
  styleUrl: './dialog-button.component.css',
})
export class DialogButtonComponent {
  constructor(private dia: MatDialog) {}
  fun() {
    const dialogRef = this.dia.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is warning message! Danger 🐱‍👤</p>`,
  styles: [
    `
      p {
        padding: 20px;
        background-color: red;
        border: 1px solid red;
      }
    `,
  ],
})
export class WarningAlertComponent {}

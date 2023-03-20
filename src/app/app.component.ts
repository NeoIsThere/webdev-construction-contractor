import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'construction-services-provider';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'lin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/lin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'fb',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/fb.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'ins',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/ins.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twi',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/twi.svg')
    );
  }
}

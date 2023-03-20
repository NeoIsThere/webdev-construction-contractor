import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  constructor() {}

  b1: boolean = false;
  b2: boolean = false;

  currentImgIndex: number = 0;
  isImage2Active: boolean = false;

  srcs: string[] = [
    'assets/main-1.png',
    'assets/main-2.png',
    'assets/main-3.png',
    'assets/main-4.png',
  ];

  img1Src: string = this.srcs[0];
  img2Src: string = this.srcs[0];

  hidingImgIndex: number = 0;

  areButtonsDisabled: boolean = false;

  onB1Click(isNext: boolean) {
    const index = (this.currentImgIndex +( isNext ? 1 : -1)) % this.srcs.length;
    this.currentImgIndex++;

    if (this.isImage2Active) {
      this.img1Src = this.srcs[index];
    } else {
      this.img2Src = this.srcs[index];
    }

    this.isImage2Active = !this.isImage2Active;
    this.b1 = !this.b1;

    this.areButtonsDisabled = true;
    setTimeout(()=>this.areButtonsDisabled = false, 3500)
  }

  onB2Click() {
    this.b1 = !this.b2;
  }

  get src() {
    return this.srcs[(this.hidingImgIndex + 1) % this.srcs.length];
  }
}

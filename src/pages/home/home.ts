import { Component } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  @ViewChild('buttonTrigger1') button1;
  @ViewChild('buttonTrigger2') button2;
  @ViewChild('buttonTrigger3') button3;
  @ViewChild('buttonTrigger4') button4;
  // isFirstTimeLoad: boolean;
  activeClass: string;

  mySlideOptions = {
    // initialSlide: 0,
    // loop: true
    pager: true
  };

  constructor(public navCtrl: NavController) {
    // this.isFirstTimeLoad = true;
  }


  clickHandler(button) {
    this.activeClass = button;
    // here starts the animation
    if (button === 'button1') {
      this.button1.nativeElement.click();
    }
    if (button === 'button2') {
      this.button2.nativeElement.click();
    }
    if (button === 'button3') {
      this.button3.nativeElement.click();
    }
    if (button === 'button4') {
      this.button4.nativeElement.click();
    }
  }

  onSlideChanged() {
    // if (this.isFirstTimeLoad) {
    //   this.isFirstTimeLoad = false;
    // } else {
    // let currentIndex = this.slider.getActiveIndex();
    // console.log("Current index is ", currentIndex);
    // }
  }

}

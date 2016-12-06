import { Component } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  @ViewChild('buttonTrigger') button;
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
    this.button.nativeElement.click();
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

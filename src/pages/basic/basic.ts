import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MotionPage} from '../../pages/motion/motion';
import {MagneticPage} from '../../pages/magnetic/magnetic';
import {RadioactivityPage} from '../../pages/radioactivity/radioactivity';
import {WavelengthPage} from '../../pages/wavelength/wavelength';

@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html'
})
export class BasicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicPage');
  }

  show1() {
        this.navCtrl.push(MotionPage);
    }
    show2() {
        this.navCtrl.push(MagneticPage);
    }
    show3() {
        this.navCtrl.push(WavelengthPage);
    }
    show4() {
        this.navCtrl.push(RadioactivityPage);
    }

}

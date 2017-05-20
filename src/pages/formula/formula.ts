import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main'; 
import {MaformulaPage} from '../../pages/maformula/maformula';
import {MformulaPage} from '../../pages/mformula/mformula';
import {RformulaPage} from '../../pages/rformula/rformula';
import {WformulaPage} from '../../pages/wformula/wformula';

/*
  Generated class for the Formula page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-formula',
  templateUrl: 'formula.html'
})
export class FormulaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulaPage');
  }

  show1() {
        this.navCtrl.push(MformulaPage);
    }
    show2() {
        this.navCtrl.push(MaformulaPage);
    }
    show3() {
        this.navCtrl.push(WformulaPage);
    }
    show4() {
        this.navCtrl.push(RformulaPage);
    }

}

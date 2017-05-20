import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BasicPage} from '../../pages/basic/basic';
import {FormulaPage} from '../../pages/formula/formula';
import {QuizPage} from '../../pages/quiz/quiz';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
           
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
  }

  

  save() {
        this.navCtrl.push(BasicPage);
    }
  save2() {
        this.navCtrl.push(FormulaPage);
    }
  save3() {
        this.navCtrl.push(QuizPage);
    }
    
}

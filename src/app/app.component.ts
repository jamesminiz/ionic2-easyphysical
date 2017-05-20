import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import {MainPage} from '../pages/main/main';
import {BasicPage} from '../pages/basic/basic';
import {MotionPage} from '../pages/motion/motion';
import {MagneticPage} from '../pages/magnetic/magnetic';
import {RadioactivityPage} from '../pages/radioactivity/radioactivity';
import {WavelengthPage} from '../pages/wavelength/wavelength';
import {FormulaPage} from '../pages/formula/formula';
import {MaformulaPage} from '../pages/maformula/maformula';
import {MformulaPage} from '../pages/mformula/mformula';
import {RformulaPage} from '../pages/rformula/rformula';
import {WformulaPage} from '../pages/wformula/wformula';
import {QuizPage} from '../pages/quiz/quiz';
import {ScorePage} from '../pages/score/score';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

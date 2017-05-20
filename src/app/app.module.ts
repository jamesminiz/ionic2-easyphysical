import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { ApplicationService } from '../services/application.service';
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
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    MainPage,
    BasicPage,
    MotionPage,
    MagneticPage,
    RadioactivityPage,
    WavelengthPage,
    FormulaPage,
    MaformulaPage,
    MformulaPage,
    RformulaPage,
    WformulaPage,
    QuizPage,
    ScorePage   
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    MainPage,
    BasicPage,
    MotionPage,
    MagneticPage,
    RadioactivityPage,
    WavelengthPage,
    FormulaPage,
    MaformulaPage,
    MformulaPage,
    RformulaPage,
    WformulaPage,
    QuizPage,
    ScorePage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ApplicationService]
})
export class AppModule {}

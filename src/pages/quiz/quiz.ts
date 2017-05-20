import { Component, NgZone } from "@angular/core";
import { ModalController, NavController, Platform, NavParams } from 'ionic-angular';   
import {MainPage} from '../../pages/main/main';
import {DetailsPage} from '../../pages/details/details';
import {ScorePage} from '../../pages/score/score';
import { ApplicationService } from '../../services/application.service'; 
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html'
})
export class QuizPage {
  public application: any = { 'Answer1': " ",'Answer2':" ",'Answer3':" ",'Answer4':" ",'Answer5':" "};
  public score:any = {'q1':0};
  constructor(public navCtrl: NavController, public navParams: NavParams,private platform: Platform, private modalCtrl: ModalController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }
checkscore() {
  
            this.score.q1 = 0;

         if(this.application.Answer1.match("Vector quantity")||this.application.Answer1.match("B")){
            this.score.q1 += 1;
        }
    
        if(this.application.Answer2.match("150")||this.application.Answer2.match("C") ){
            this.score.q1 += 1;
        }
        if(this.application.Answer3.match("Resultant vector")||this.application.Answer3.match("B") ){
            this.score.q1 += 1;
        }
        if(this.application.Answer4.match("Number")||this.application.Answer4.match("A") ){
            this.score.q1 += 1;
        }
        if(this.application.Answer5.match("30 N")||this.application.Answer5.match("D") ){
            this.score.q1 += 1;
        }
        console.log(this.score);
       let scores = this.modalCtrl.create(ScorePage,{score :this.score.q1});
                scores.present();

    }
    
}

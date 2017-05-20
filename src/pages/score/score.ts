import { Component, NgZone } from "@angular/core";
import { ModalController, NavController, Platform,NavParams } from 'ionic-angular';  
import {ApplicationService } from '../../services/application.service';  
import {DetailsPage} from '../../pages/details/details';
import {MainPage} from '../../pages/main/main';
@Component({
  selector: 'page-score',
  templateUrl: 'score.html'
})
export class ScorePage {
   public application: any = {};
    public isNew = true;
    public action = 'Add';
    public isoDate = '';
 public applications = [];
 Scores : any = this.navParams.get('score');
 
    constructor(private ApplicationService: ApplicationService,
        private nav: NavController,
        private platform: Platform,
        private zone: NgZone,
        private modalCtrl: ModalController,
        private navParams: NavParams,) {

    }

    ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.ApplicationService.initDB();

            this.ApplicationService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.applications = data;
                    });
                })
                .catch(console.error.bind(console));
        });
    }

    showDetail(application) {
        let modal = this.modalCtrl.create(DetailsPage, { application: application });
        modal.present();

    }

    save() {
        this.nav.push(MainPage);
    }
}




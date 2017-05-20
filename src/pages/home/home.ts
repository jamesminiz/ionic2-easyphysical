import { Component, NgZone } from "@angular/core";
import { ModalController, NavController, Platform } from 'ionic-angular';  
import { ApplicationService } from '../../services/application.service';  
import { DetailsPage } from '../details/details';  
import { MainPage } from '../main/main';  
import {BasicPage} from '../../pages/basic/basic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
    public applications = [];

    constructor(private applicationService: ApplicationService,
        private nav: NavController,
        private platform: Platform,
        private zone: NgZone,
        private modalCtrl: ModalController) {

    }

    ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.applicationService.initDB();

            this.applicationService.getAll()
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
        this.nav.push(MainPage);
    }
}
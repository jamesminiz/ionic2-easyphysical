import { Component } from '@angular/core';  
import { NavController, ViewController,NavParams } from 'ionic-angular';  
import { ApplicationService } from '../../services/application.service';  
import {HomePage} from '../../pages/home/home';
import {MainPage} from '../../pages/main/main';
import {BasicPage} from '../../pages/basic/basic';
import {ScorePage} from '../../pages/score/score';
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {  
    public application: any = {};
    public isNew = true;
    public action = 'Add';
    public isoDate = '';

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams,
        private applicationService: ApplicationService,
        private navCtrl:NavController) {
    }

    ionViewDidLoad() {
        let editApplication = this.navParams.get('application');

        if (editApplication) {
            this.application = editApplication;
            this.isNew = false;
            this.action = 'Edit';
            this.isoDate = this.application.Date.toISOString().slice(0, 10);
        }
    }

    save() {
     this.application.Date = new Date(this.isoDate);
        
        if (this.isNew) {
            this.applicationService.add(this.application)
                .catch(console.error.bind(console));}

        else {
            this.applicationService.update(this.application)
                .catch(console.error.bind(console));
        } 
        this.dismiss();
    }

    delete() {
        this.applicationService.delete(this.application)
            .catch(console.error.bind(console));

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.application);
    }

}
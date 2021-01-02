import { Component } from '@angular/core';
import { Storage } from '@ionic/Storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private storage: Storage, public navCtrl: NavController) {
    this.get('userid').then((val) => {
      if(val == null){
        this.navCtrl.navigateForward('/login');  
      }else{
        console.log('Your age is', val);
      }
      
    });
  }

  public set(settingName,value){
    return this.storage.set(`setting:${ settingName }`,value);
  }
  public async get(settingName){
    return await this.storage.get(`setting:${ settingName }`);
  }
  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }

}

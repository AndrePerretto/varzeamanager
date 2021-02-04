import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storage: Storage, public navCtrl: NavController, public http: HttpClient) { 
    this.remove("userid");
  }

  ngOnInit() {
  }

  login():void{
      var login = (<HTMLInputElement>document.getElementById('login')).value;
      var senha = (<HTMLInputElement>document.getElementById('senha')).value;
      //alert('entrou no login');
      if(!login || !senha){ 
       /* const alert = this.alertCtrl.create({
          title: 'Desculpe',
          subTitle: 'Informe um login e senha',
          buttons: ['OK']
        });
        alert.present();*/
        alert('Informe um login e senha');
        return;
      }

      console.log(login);
      console.log(senha);
      this.http.get("http://ec2-18-228-166-97.sa-east-1.compute.amazonaws.com:8000/api/usuarios/login/" + login + "/" + senha, {})
      .subscribe(data => {
        console.log(data);
        if(data){
          if(data[0]){
            this.set("userid",data[0].id);
            console.log(data[0].id);
            if(data[0].nr_level){
              this.navCtrl.navigateForward('/tabs/tab1');
            }else{
              this.navCtrl.navigateForward('/inicio');
            }
             
          }else{
            alert("Login ou senha não encontrado");
          }          
        }else{
          alert("Login ou senha não encontrado");
        }
       }, error => {
        alert(error);
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

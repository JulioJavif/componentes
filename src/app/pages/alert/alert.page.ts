import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      backdropDismiss: false,
      subHeader: 'Mensaje importante',
      message: 'Esta es una alerta',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButton(){
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      backdropDismiss: false,
      subHeader: 'Mensaje importante',
      message: 'Esta es una alerta',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            console.log('OK!');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Cancel');
          }
        }
      ],
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: (value) => {
            console.log(value);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('cancel');
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Name',
          id: 'nombre'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
          id: 'nick'
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
          id: 'acercaDe'
        },
        {
          type: 'date',
          placeholder: 'Birthday',
          id: 'birthday'
        }
      ],
    });

    await alert.present();
  }

}

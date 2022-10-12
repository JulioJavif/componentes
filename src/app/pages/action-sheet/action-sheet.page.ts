import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  }

  result: string;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albunes',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          icon: 'trash-outline',
          cssClass: 'rojo',
          handler: () => {
            console.log('Eliminar');
          }
        },
        {
          text: 'Share',
          icon: 'share-outline',
          handler: () => {
            console.log('Share');
          }
        },
        {
          text: 'Play',
          icon: 'caret-forward-circle-outline',
          handler: () => {
            console.log('Play');
          }
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          handler: () => {
            console.log('Favorite');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
}

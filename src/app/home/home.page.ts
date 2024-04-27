import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}


//Окно. Редактирование
  isModalOpen = false;
  editOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  

  //Окно предупреждение. Удаление
  isAlertOpen = false;
  alertButtons2 = [
    {
      text: 'Отменить',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Удалить',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
  alertOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }





/*   public alertButtons = [
    {
      text: 'Отменить',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Удалить',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ]; */



  
}

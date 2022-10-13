import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fecha: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  getDate(){
    let temp = new Date(this.fecha.toUTCString());
    return temp.toISOString();
  }

  cambioFecha(event){
    console.log(event?.detail?.value);
    
  }

}

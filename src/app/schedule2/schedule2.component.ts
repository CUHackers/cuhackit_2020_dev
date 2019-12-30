import { Component, OnInit } from '@angular/core';
import moment from 'moment';
require('twix')
import * as sunday from './Sunday.json';

@Component({
  selector: 'app-schedule2',
  templateUrl: './schedule2.component.html',
  styleUrls: ['./schedule2.component.css']
})
export class Schedule2Component implements OnInit {

  constructor() { }

  sunday = (sunday as any).default;

  ngOnInit() {
    var  j = 0;

    this.sunday.forEach((event, i) => {

      let st = moment(event['Start Time'],"LT")
      let et = moment(event['End Time'],"LT")

      let length = (st as any).twix(et).length("hours");
      let offset = (st as any).hours()
      if(!length)
        length++

      if(event['Column'] - 1)
        event['Color'] = "bg-info"
      else {
        event['Color'] = ['bg-secondary','bg-primary'][j%2]
        j++;
      }

      event['Length'] = length*45;
      event['Offset'] = offset*45;

    })

    let q = moment("12:00 AM", "LT");
    let b = moment("4:00 PM", "LT");
    this.clock = (q as any).twix(b).toArray(2, "hours")
                    .map((a) => a.format("LT"))

}
  height = 550/7;
  clock = []


}

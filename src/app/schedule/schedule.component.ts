import { Component, OnInit } from '@angular/core';
import * as saturday from './Saturday.json';
import moment from 'moment';
require('twix')

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  saturday = (saturday as any).default;

  ngOnInit() {
    var  j = 0;

    this.saturday.forEach((event, i) => {

      let st = moment(event['Start Time'],"LT")
      let et = moment(event['End Time'],"LT")

      let length = st.twix(et).length("hours");
      let offset = st.subtract(540,"minutes").hours()
      if(!length)
        length++

      if(event['Column'] - 1)
        event['Color'] = "bg-info"
      else {
        event['Color'] = ['bg-secondary','bg-primary'][j%2]
        j++;
      }

      event['Length'] = length*45
      event['Offset'] = offset*45

    })

    for (let i = 9; i <= 21; i+=2) {
      let t:string;
      if ( i > 11)
        t = (i - 12) + ":00 PM"
      else
        t = i + ":00 AM"
      this.clock.push(t);
    }
  }

  height = 550/7;
  clock = []



}

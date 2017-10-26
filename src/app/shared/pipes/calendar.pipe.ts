import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  transform(time: Date, args?: any): any {
    if (!time) return '';

    // http://momentjs.com/docs/#/customization/calendar/
    moment.updateLocale('en', {
      calendar : {
        lastWeek : 'dddd',
        lastDay : '[Yesterday]',
        sameDay : 'LT',

        sameElse : 'L'
      }
    });

    return moment(time).calendar();
  }

}

import './CalendarDaysViewComponent.html';
import '../data/calendarDay.js';

export default class CalendarDaysViewComponent {

  constructor() {
    this.panelTitle = Ext.Date.format(new Date(), 'F Y');
  }

  panelReady(event) {
    this.panel = event.detail.cmp;
    this.panel.setTitle(this.panelTitle);
  }

  calendarListReady(event) {
    this.calendarList = event.detail.cmp;
    this.store = Ext.create('Ext.calendar.store.Calendars', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: '/KitchenSink/CalendarDays'
      }
    });

    this.calendarList.setStore(this.store);
  }

  calendarDayReady(event) {
    this.calendarDay = event.detail.cmp;
    this.calendarDay.setValue(new Date());
    this.calendarDay.setStore(this.store);
  }
}

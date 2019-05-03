import './CalendarMonthViewComponent.html';
import '../data/calendarFull.js';

export default class CalendarMonthViewComponent {

  constructor() { }

  panelReady = (event) => {
    this.panel = event.detail.cmp;
    this.panel.setTitle(Ext.Date.format(new Date(),'F Y'))
    this.panel.setTitleAlign('center');
  }
 
  calendarListReady = (event) => {
    this.store = Ext.create('Ext.calendar.store.Calendars', {
      autoLoad: true,
      proxy:{
        type: 'ajax',
        url: '/KitchenSink/CalendarFull'
      }
    })
    this.calendarListReady = event.detail.cmp;
    this.calendarListReady.setStore(this.store);
  }

  calendarMonthReady = (event) => {
    this.calendarMonthReady = event.detail.cmp;
    this.calendarMonthReady.setStore(this.store);
  }
}

import './CalendarMonthViewComponent.html';

export default class CalendarMonthViewComponent {

  constructor() { }
 
  calendarListReady(event) {
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

  calendarMonthReady(event){
    this.calendarMonthReady = event.detail.cmp;
    this.calendarMonthReady.setStore(this.store);
  }
}

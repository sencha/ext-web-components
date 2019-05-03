import './CalendarPanelComponent.html';
import '../data/calendarFull.js';

export default class CalendarPanelComponent {
  constructor() {}

  onReady = (event) => {
    const store = Ext.create('Ext.calendar.store.Calendars', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: '/KitchenSink/CalendarFull'
      }
    });
    this.panel = event.detail.cmp;
    this.panel.setStore(store);
  }
}

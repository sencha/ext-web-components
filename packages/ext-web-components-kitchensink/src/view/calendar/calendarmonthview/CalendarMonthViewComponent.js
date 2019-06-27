import './CalendarMonthViewComponent.html';
import '../data/calendarFull.js';

export default class CalendarMonthViewComponent {

    constructor() { }

    panelReady = (event) => {
        this.panelCmp = event.detail.cmp;
        this.panelCmp.setTitle(Ext.Date.format(new Date(), 'F Y'));
        this.panelCmp.setTitleAlign('center');
    }

    calendarListReady = (event) => {
        this.store = Ext.create('Ext.calendar.store.Calendars', {
            autoLoad: true,
            proxy:{
                type: 'ajax',
                url: '/KitchenSink/CalendarFull'
            }
        });
        this.calendarListReadyCmp = event.detail.cmp;
        this.calendarListReadyCmp.setStore(this.store);
    }

    calendarMonthReady = (event) => {
        this.calendarMonthReadyCmp = event.detail.cmp;
        this.calendarMonthReadyCmp.setStore(this.store);
    }
}

import './CalendarDaysViewComponent.html';
import '../data/calendarDay.js';

export default class CalendarDaysViewComponent {
    constructor() {
        this.panelTitle = Ext.Date.format(new Date(), 'F Y');
    }

    panelReady = (event) => {
        this.panelCmp = event.detail.cmp;
        this.panelCmp.setTitle(this.panelTitle);
    }

    calendarListReady = (event) => {
        this.calendarListCmp = event.detail.cmp;
        this.store = Ext.create('Ext.calendar.store.Calendars', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/CalendarDays'
            }
        });
        this.calendarListCmp.setStore(this.store);
    }

    calendarDayReady = (event) => {
        this.calendarDayCmp = event.detail.cmp;
        this.calendarDayCmp.setValue(new Date());
        this.calendarDayCmp.setStore(this.store);
    }
}

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
        this.calendarPanel = event.detail.cmp;
        this.calendarPanel.setStore(store);
    }
}

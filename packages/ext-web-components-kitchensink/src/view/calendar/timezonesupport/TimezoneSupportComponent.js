import './TimezoneSupportComponent.html';
import '../data/calendarTimezone.js';

export default class CalendarTimezoneSupportComponent {

    constructor() {
        this.panelTitleValue = Ext.Date.format(new Date(), 'F Y');
        this.isPhone = Ext.os.is.Phone;
    }

    calendarDayReady = (event) => {
        this.calendarDayCmp = event.detail.cmp;
        const store = Ext.create('Ext.calendar.store.Calendars', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/CalendarTimezone'
            }
        });
        this.calendarDayCmp.setStore(store);
    }

    selectFieldReady = (event) => {
        const selectField = event.detail.cmp;
        selectField.setOptions([
            {
                text: this.isPhone ? 'New York -5' : 'New York (UTC-05:00)',
                value: 300
            },
            {
                text: this.isPhone ? 'London +0' : 'London (UTC+00:00)',
                value: 0
            },
            {
                text: this.isPhone ? 'Paris +1' : 'Paris (UTC+01:00)',
                value: -60
            },
            {
                text: this.isPhone ? 'Sydney +10' : 'Sydney (UTC+10:00)',
                value: -600
            }
        ]);
    }

    changeOptions = () => {
        if (this.calendarDayCmp) {
            const selectorValue = Ext.getCmp('selector').getSelection().data.value;
            this.timezoneOffset = selectorValue;
            this.calendarDayCmp.setTimezoneOffset(this.timezoneOffset);
        }
    }

    panelheaderReady(event) {
        this.panelheader = event.detail.cmp;
        this.panelheader.setTitle(this.panelTitleValue);
    }

    panelReady = (event) => {
        this.panelCmp = event.detail.cmp;
    }
}
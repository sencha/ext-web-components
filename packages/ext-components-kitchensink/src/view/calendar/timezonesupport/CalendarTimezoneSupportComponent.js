import './CalendarTimezoneSupportComponent.html';
import './data.js';

export default class CalendarTimezoneSupportComponent {

  constructor() {
    this.panelTitle = Ext.Date.format(new Date(), 'F Y');
    this.isPhone = Ext.os.is.Phone;
  }

  changeOptions = () => {
    const selectorValue = Ext.getCmp('selector').getSelection().data.value;
    this.timezoneOffset = selectorValue;
  }

  calendarDayReady(event) {
    this.calendarDay = event.detail.cmp;
    const store = Ext.create('Ext.calendar.store.Calendars', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: '/KitchenSink/CalendarTimezone'
      }
    })
    this.calendarDay.setStore(store);
  }

  panelReady(event) {
    this.panel = event.detail.cmp;
    this.panel.setTitle(this.panelTitle);
    this.panel.setHeader(
      {
        layout: 'hbox',
        items: [{
          xtype: 'component',
          flex: 1
        },
        {
          xtype: 'selectfield',
          id: 'selector',
          width: this.isPhone ? 150 : 200,
          value: 0,
          listeners: {
            change: this.changeOptions
          },
          options: [{
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
          ]
        }]
      })

  }
}

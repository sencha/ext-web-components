import './CalendarWeekViewComponent.html';
import '../data/calendarWeek.js';

export default class CalendarWeekViewComponent {
    constructor() {
        this.panelTitle = Ext.Date.format(new Date(), 'F Y');
        this.visibleDays = 7;
        this.firstDayOfWeek = 0;
    }

    changeCalendarView = (button, value) => {
        let buttVal = button._value;
        if (buttVal == 'fullweek') {
            this.calendarview = value;
            this.visibleDays = 7;
            this.firstDayOfWeek = 1;
        }
        else {
            this.calendarview = value;
            this.visibleDays = 5;
            this.firstDayOfWeek = 1;
        }
        this.calendarWeek.setFirstDayOfWeek(this.firstDayOfWeek);
        this.calendarWeek.setVisibleDays(this.visibleDays);
    }

    panelReady = (event) => {
        this.panelCmp = event.detail.cmp;
        this.panelCmp.setTitle(this.panelTitle);
        this.panelCmp.setHeader({
            layout: 'hbox',
            items: [{
                xtype: 'component',
                flex: 1
            }, {
                xtype: 'segmentedbutton',
                items: [{
                    text: this.isPhone ? null : 'Full Week',
                    iconCls: this.isPhone ? 'x-fa fa-calendar-check-o' : null,
                    value: 'fullweek',
                    handler: this.changeCalendarView.bind(this)
                }, {
                    text: this.isPhone ? null : 'Work Week',
                    iconCls: this.isPhone ? 'x-fa fa-briefcase' : null,
                    value: 'workweek',
                    handler: this.changeCalendarView.bind(this)
                }]
            }]
        });
    }

    innnerPanelReady = (event) => {
        this.innerPanelCmp = event.detail.cmp;
        this.innerPanelCmp.setHidden(this.isPhone);
    }

    calendarListReady = (event) => {
        this.calendarListCmp = event.detail.cmp;
        this.store = Ext.create('Ext.calendar.store.Calendars', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/CalendarWeek'
            }
        });
        this.calendarListCmp.setStore(this.store);
    }

    calendarWeekReady = (event) => {
        this.calendarWeekCmp = event.detail.cmp;
        this.calendarWeekCmp.setStore(this.store);
        this.calendarWeekCmp.setValue(new Date());
        this.calendarWeekCmp.setFirstDayOfWeek(this.firstDayOfWeek);
        this.calendarWeekCmp.setVisibleDays(this.visibleDays);
    }
}

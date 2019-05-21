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
            this.firstDayOfWeek = 0;
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
        this.panel = event.detail.cmp;
        this.panel.setTitle(this.panelTitle);
        this.panel.setHeader({
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
        this.innerPanel = event.detail.cmp;
        this.innerPanel.setHidden(this.isPhone);
    }

    calendarListReady = (event) => {
        this.calendarList = event.detail.cmp;
        this.store = Ext.create('Ext.calendar.store.Calendars', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/CalendarWeek'
            }
        });
        this.calendarList.setStore(this.store);
    }

    calendarWeekReady = (event) => {
        this.calendarWeek = event.detail.cmp;
        this.calendarWeek.setStore(this.store);
        this.calendarWeek.setValue(new Date());
        this.calendarWeek.setFirstDayOfWeek(this.firstDayOfWeek);
        this.calendarWeek.setVisibleDays(this.visibleDays);
    }
}

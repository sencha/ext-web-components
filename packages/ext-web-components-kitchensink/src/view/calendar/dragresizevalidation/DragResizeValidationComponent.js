import './DragResizeValidationComponent.html';
import '../data/calendarValidation.js';

export default class CalendarDragResizeValidationComponent {
    constructor() { }

    calendarDayReady = (event) => {
        this.calendarDay = event.detail.cmp;
        const store = Ext.create('Ext.calendar.store.Calendars', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/CalendarValidation'
            }
        });

        this.calendarDay.setTimezoneOffset(0);
        this.calendarDay.setStore(store);
        this.calendarDay.setValue(new Date());
        this.calendarDay.setListeners({
            beforeeventdragstart: this.onBeforeDragStart,
            beforeeventresizestart: this.onBeforeResizeStart,
            validateeventdrop: this.confirmAction,
            validateeventresize: this.confirmAction,
            validateeventerase: this.confirmAction
        });
    }

    onBeforeDragStart = (calendarday, context) => {
        const notAllowed = ['Not draggable', 'Not draggable/resizable'];
        let contains = !Ext.Array.contains(notAllowed, context.event.data.title);
        return contains;
    }

    onBeforeResizeStart = (calendarday, context) => {
        const notAllowed = ['Not resizable', 'Not draggable/resizable'];
        let contains = !Ext.Array.contains(notAllowed, context.event.data.title);
        return contains;
    }

    confirmAction = (calendarday, context) => {
        debugger;
        context.validate = context.validate.then(function() {
            return new Ext.Promise(function(resolve) {
                Ext.Msg.confirm('Are you sure', 'Allow the action to go ahead?', function(btn) {
                    resolve(btn === 'yes');
                });
            });
        });
    }
}

import './DragResizeValidationComponent.html';
import '../data/calendarValidation.js';

export default class CalendarDragResizeValidationComponent {
    constructor() {}

    calendarDayReady = (event) => {
        this.calendarDayCmp = event.detail.cmp;
      
        const store = Ext.create('Ext.calendar.store.Calendars', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/CalendarValidation'
            }
        });

        this.calendarDayCmp.setStore(store);
        this.calendarDayCmp.setValue(new Date());
      
        this.calendarDayCmp.setListeners({
            beforeeventdragstart: this.onBeforeDragStart,
            beforeeventresizestart: this.onBeforeResizeStart,
            validateeventdrop: this.confirmAction,
            validateeventresize: this.confirmAction
        });
    }

    onBeforeDragStart = ({ detail: { context } }) => {
        const notAllowed = ['Not draggable', 'Not draggable/resizable'];
        return !Ext.Array.contains(notAllowed, context.event.data.title);
    }

    onBeforeResizeStart = ({ detail: { context } }) => {
        const notAllowed = ['Not resizable', 'Not draggable/resizable'];
        return !Ext.Array.contains(notAllowed, context.event.data.title);
    }

    confirmAction = ({ detail: { context } }) => {
        context.validate = context.validate.then(function() {
            return new Ext.Promise(function(resolve) {
                Ext.Msg.confirm('Are you sure', 'Allow the action to go ahead?', function(btn) {
                    resolve(btn === 'yes');
                });
            });
        });
    }
}

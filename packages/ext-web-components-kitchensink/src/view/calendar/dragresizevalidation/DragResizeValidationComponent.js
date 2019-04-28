import './DragResizeValidationComponent.html';
import '../data/calendarValidation.js';

export default class CalendarDragResizeValidationComponent {

  constructor() { }

  calendarDayReady(event) {
    this.calendarDay = event.detail.cmp;
    this.calendarDay.setValue(new Date());
    const store = Ext.create('Ext.calendar.store.Calendars', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: '/KitchenSink/CalendarValidation'
      }
    })
    this.calendarDay.setStore(store);
    this.calendarDay.setListeners(
      this.myCalListeners = {
        beforeeventdragstart: this.onBeforeDragStart,
        beforeeventresizestart: this.onBeforeResizeStart,
        validateeventdrop: this.confirmAction,
        validateeventresize: this.confirmAction,
        validateeventerase: this.confirmAction
      }
    );
  }

  onBeforeDragStart(calendarday, context) {
    const notAllowed = ['Not draggable', 'Not draggable/resizable'];
    let contains = !Ext.Array.contains(notAllowed, context.event.data.title);
    return contains;
  }

  onBeforeResizeStart(calendarday,context) {
    const notAllowed = ['Not resizable', 'Not draggable/resizable'];
    let contains = !Ext.Array.contains(notAllowed, context.event.data.title);
    return contains;
  }

  confirmAction(calendarday,context) {
    context.validate = context.validate.then(function () {
      return new Ext.Promise(function (resolve, reject) {
        Ext.Msg.confirm('Are you sure', 'Allow the action to go ahead?', function (btn) {
          resolve(btn === 'yes');
        });
      });
    });
  }
}

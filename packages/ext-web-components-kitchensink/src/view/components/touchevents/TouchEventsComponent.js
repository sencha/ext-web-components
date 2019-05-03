import './TouchEventsComponent.html';

export default class TouchEventsComponent {

  constructor () {}

  events = [{type:'drag'}, {type:'touchmove'}];

  touchpadReady = (event) => {
    const element = event.detail.cmp.el;
    this.touchpadRef = element;
    this.touchpadRef.on({
      scope: this,
      touchstart: this.onTouchEvent,
      touchend: this.onTouchEvent,
      touchmove: this.onTouchEvent,
      swipe: this.onTouchEvent,
      dragstart: this.onTouchEvent,
      drag: this.onTouchEvent,
      dragend: this.onTouchEvent,
      tap: this.onTouchEvent,
      singletap: this.onTouchEvent,
      doubletap: this.onTouchEvent,
      longpress: this.onTouchEvent,
      pinch: this.onTouchEvent,
      rotate: this.onTouchEvent
    });

    element.dom.style.cssText += "border: 8px dashed #d6d6d6; border-radius: 30px; text-align: center; font-size: 48px; color: #ccc;";
  }

  dataviewReady = (event) => {
    this.theDataview = event.detail.cmp;
    this.theDataview.setItemTpl('<p style="margin: 4px;">{type}</p>');
  }

  onTouchEvent(e, target, options) {
    this.events = [{type:e.type} , ...this.events];
    this.theDataview.setData(this.events);
  }

  clearEventLog() {
    this.events = [];
    this.theDataview.setData(null);
  }

  panelReady = (event) => {
    this.panel = event.detail.cmp;
    const panelHeader =  {
      items: [
      {
        xtype: "button",
        align: "right",
        text: "clear",
        ui: "alt",
        handler: this.clearEventLog.bind(this)
      }]
    }
    this.panel.setHeader(panelHeader);
    this.panel.setTitle('Event Log');
  }
}

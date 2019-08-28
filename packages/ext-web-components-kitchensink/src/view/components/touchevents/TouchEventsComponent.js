import './TouchEventsComponent.html';

export default class TouchEventsComponent {
    constructor() {
        this.events = [{type:'drag'}, {type:'touchmove'}];
    }

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

        element.dom.style.cssText += 'border: 8px dashed #d6d6d6; border-radius: 30px; text-align: center; font-size: 48px; color: #ccc;';
    }

    dataviewReady = (event) => {
        this.theDataviewCmp = event.detail.cmp;
        this.theDataviewCmp.setItemTpl('<p style="margin: 4px;">{type}</p>');
    }

    onTouchEvent = (e) => {
        this.events = [{type:e.type}, ...this.events];
        this.theDataviewCmp.setData(this.events);
    }

    clearEventLog = () => {
        this.events = [];
        this.theDataviewCmp.setData(null);
    }

    panelReady = (event) => {
        this.panelCmp = event.detail.cmp;
        const panelHeader = {
            items: [
                {
                  xtype: 'paneltitle',
                  flex: 1,
                  text: 'Event Log'
                },
                {
                    xtype: 'button',
                    text: 'clear',
                    ui: 'alt',
                    handler: this.clearEventLog.bind(this)
                }]
        };
        this.panelCmp.setHeader(panelHeader);
    }
}

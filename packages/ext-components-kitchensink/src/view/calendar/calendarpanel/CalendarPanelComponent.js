import './CalendarPanelComponent.css';
import './CalendarPanelComponent.html';

export default class CalendarPanelComponent {

  constructor () {
    console.log('in CalendarPanelComponent constructor');
  }

  onReady(event) {
    debugger;
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }
}

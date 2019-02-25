import './CalendarWeekViewComponent.css';

export default class CalendarWeekViewComponent {

  constructor () {
    console.log('in CalendarWeekViewComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

import './CalendarMonthViewComponent.css';

export default class CalendarMonthViewComponent {

  constructor () {
    console.log('in CalendarMonthViewComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

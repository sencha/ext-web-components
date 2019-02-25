import './CalendarTimezoneSupportComponent.css';

export default class CalendarTimezoneSupportComponent {

  constructor () {
    console.log('in CalendarTimezoneSupportComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

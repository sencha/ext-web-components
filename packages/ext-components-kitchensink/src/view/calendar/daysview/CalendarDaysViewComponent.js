import './CalendarDaysViewComponent.css';

export default class CalendarDaysViewComponent {

  constructor () {
    console.log('in CalendarDaysViewComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

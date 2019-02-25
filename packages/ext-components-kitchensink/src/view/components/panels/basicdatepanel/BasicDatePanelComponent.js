import './BasicDatePanelComponent.css';

export default class BasicDatePanelComponent {

  constructor () {
    console.log('in BasicDatePanelComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

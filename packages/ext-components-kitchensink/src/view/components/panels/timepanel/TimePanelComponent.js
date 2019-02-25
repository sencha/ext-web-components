import './TimePanelComponent.css';

export default class TimePanelComponent {

  constructor () {
    console.log('in TimePanelComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

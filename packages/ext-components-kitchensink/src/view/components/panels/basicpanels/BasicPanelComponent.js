import './BasicPanelComponent.css';

export default class BasicPanelComponent {

  constructor () {
    console.log('in BasicPanelComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

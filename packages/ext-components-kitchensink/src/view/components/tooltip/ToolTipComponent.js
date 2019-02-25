import './ToolTipComponent.css';

export default class ToolTipComponent {

  constructor () {
    console.log('in ToolTipComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

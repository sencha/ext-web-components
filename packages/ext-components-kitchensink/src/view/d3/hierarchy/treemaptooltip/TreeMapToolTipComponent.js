import './TreeMapToolTipComponent.css';

export default class TreeMapToolTipComponent {

  constructor () {
    console.log('in TreeMapToolTipComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

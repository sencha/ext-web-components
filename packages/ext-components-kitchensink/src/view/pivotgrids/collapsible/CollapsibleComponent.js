import './CollapsibleComponent.css';

export default class CollapsibleComponent {

  constructor () {
    console.log('in CollapsibleComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

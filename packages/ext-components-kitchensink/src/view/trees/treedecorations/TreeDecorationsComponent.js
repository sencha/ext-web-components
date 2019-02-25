import './TreeDecorationsComponent.css';

export default class TreeDecorationsComponent {

  constructor () {
    console.log('in TreeDecorationsComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

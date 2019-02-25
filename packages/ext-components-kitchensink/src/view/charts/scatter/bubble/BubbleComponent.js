import './BubbleComponent.css';

export default class BubbleComponent {

  constructor () {
    console.log('in BubbleComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

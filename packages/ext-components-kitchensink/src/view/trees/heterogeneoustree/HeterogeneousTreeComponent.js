import './HeterogeneousTreeComponent.css';

export default class HeterogeneousTreeComponent {

  constructor () {
    console.log('in HeterogeneousTreeComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

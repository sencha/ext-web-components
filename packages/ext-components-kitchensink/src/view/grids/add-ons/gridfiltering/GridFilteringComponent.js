import './GridFilteringComponent.css';

export default class GridFilteringComponent {

  constructor () {
    console.log('in GridFilteringComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

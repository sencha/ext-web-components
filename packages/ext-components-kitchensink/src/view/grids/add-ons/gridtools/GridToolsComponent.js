import './GridToolsComponent.css';

export default class GridToolsComponent {

  constructor () {
    console.log('in GridToolsComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

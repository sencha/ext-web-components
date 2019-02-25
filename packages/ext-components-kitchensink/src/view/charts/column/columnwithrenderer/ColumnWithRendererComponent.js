import './ColumnWithRendererComponent.css';

export default class ColumnWithRendererComponent {

  constructor () {
    console.log('in ColumnWithRendererComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

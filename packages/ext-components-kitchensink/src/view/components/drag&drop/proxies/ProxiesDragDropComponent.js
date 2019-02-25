import './ProxiesDragDropComponent.css';

export default class ProxiesDragDropComponent {

  constructor () {
    console.log('in ProxiesDragDropComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

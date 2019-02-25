import './GroupsDragDropComponent.css';

export default class GroupsDragDropComponent {

  constructor () {
    console.log('in GroupsDragDropComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

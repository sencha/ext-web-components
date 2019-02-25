import './FilesDragDropComponent.css';

export default class FilesDragDropComponent {

  constructor () {
    console.log('in FilesDragDropComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

import './ResizableLayoutComponent.css';

export default class ResizableLayoutComponent {

  constructor () {
    console.log('in ResizableLayoutComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

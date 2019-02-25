import './ResizableHandleComponent.css';

export default class ResizableHandleComponent {

  constructor () {
    console.log('in ResizableHandleComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}

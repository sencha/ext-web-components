export default class ButtonComponent {

  constructor() {
  }

  readyButton1(event) {
    var cmp = event.detail.cmp
    this.button1 = event.detail.cmp
    cmp.setText('goodbye')
  }

  tapButton1(event) {
    this.button1.setText(new Date())
  }

}

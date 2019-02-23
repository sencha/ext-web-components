export default class button {

  constructor() {
    console.log('button constructor')
  }

  readyButton1(event) {
    console.log('readyButton1')
    var cmp = event.detail.cmp
    this.button1 = event.detail.cmp
    console.log(cmp)
    console.log(cmp.getText())
    cmp.setText('goodbye')
  }

  tapButton1(event) {
    this.button1.setText(new Date())
  }

}

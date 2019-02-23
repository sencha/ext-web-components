export default class home {

  constructor() {
    //console.log('about constructor')
  }

  readyButton1(event) {
    var cmp = event.detail.cmp
    console.log('readyButton1 in Home for: ' + cmp.xtype)
  }

}

export default class about {

  constructor() {
    //console.log('about constructor')
  }

  readyButton1(event) {
    var cmp = event.detail.cmp
    console.log('readyButton1 in About for: ' + cmp.xtype)
  }

}

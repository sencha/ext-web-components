export default class kitchensink {

  constructor() {

    main.setCodeTabs()
  }

  readyButton1(event) {
    var cmp = event.detail.cmp
    console.log('readyButton1 in About for: ' + cmp.xtype)
  }

}


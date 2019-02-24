import path from 'path'
//import kitchensink from '../kitchensink.js'

//import kitchensink from path.join(__dirname, 'src', 'view', 'kitchensink.js')
export default class about {

  constructor() {
 //   main.setCodeTabs()
    //super()
    //console.log(path.join(__dirname, 'src', 'view'))
  }

  readyButton1(event) {
    var cmp = event.detail.cmp
    console.log('readyButton1 in About for: ' + cmp.xtype)
  }

}

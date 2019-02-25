export default class BasicgridComponent {

  readyButton1(event) {
    var cmp = event.detail.cmp
    console.log('readyButton1 in Home for: ' + cmp.xtype)
  }

}
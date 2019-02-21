button = {

  readyButton1: function(event) {
    console.log('readyButton1')
    var cmp = event.detail.cmp
    button.button1 = event.detail.cmp
    console.log(cmp)
    console.log(cmp.getText())
    cmp.setText('goodbye')
  },

  tapButton1: function(event) {
    button.button1.setText(new Date())
  }

}

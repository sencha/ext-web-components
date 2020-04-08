Ext.onReady(function() {
  var formpanel = Ext.create({
    xtype: 'formpanel',
    fullscreen:true,
    layout:'form',
    items: [{
      xtype: 'textareafield',
      maxRows: 10
    }]
  })
  Ext.application({
    name: 'MyEWCApp',
    launch: function () {
      Ext.Viewport.add([formpanel])
    }
  });
})

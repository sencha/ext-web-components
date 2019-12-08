
Ext.onReady(function() {

  var panelProps = {
    xtype: 'panel',
    plugins: {viewport: true}
  };
  var panel = Ext.create(panelProps);

  setTimeout(function() {
    panel.setTitle('fit');
    panel.setLayout('fit');
    panel.setBodyStyle('background:#ffc; padding:10px;')

    var buttonProps = {
      xtype: 'button',
      text: 'button',
      border: true,
      listeners: {}
    };
    var button = Ext.create(buttonProps);

    panel.add(button);
  }, 0);

})

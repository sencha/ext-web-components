
Ext.onReady(function() {

  var panelProps = {
    xtype: 'panel',
    plugins: {viewport: true}
  };
  var panel = Ext.create(panelProps);

  window.renderSign = function(format, value){
    var f = Ext.util.Format.number(value, format)
    return `
    <span style="color: green">
    ${f}
    </span>`
  }

  window.renderMailto = function(v) {
    return '<a href="mailto:' + encodeURIComponent(v) + '">' +
        Ext.htmlEncode(v) + '</a>';
},

  setTimeout(function() {
    panel.setTitle('panel');
    panel.setLayout('fit');
    panel.setBodyStyle('background:#ffc; padding:10px;')

    var gridProps = {
      xtype: 'grid'
    };
    var grid = Ext.create(gridProps);
    grid.setTitle('grid');
    grid.setBorder(true);
    grid.add([{text: 'priceChangePct', dataIndex: 'priceChangePct'}])

    grid.setColumns([
      {text: 'name', dataIndex: 'name'},
      {text: 'Both', xtype: 'templatecolumn', tpl: '{name} {email}', flex:1},
      {text: 'email', dataIndex: 'email', width: 200, renderer: window.renderMailto.bind(this),},
      {text: '% Change', dataIndex: 'priceChangePct',
      renderer: window.renderSign.bind(this, '0.00'),
          align: 'right',
          cell: {
            xtype: 'reactcell',
            encodeHtml: false,

          }}
    ]);
    var data=[
      {name: 'Marc', email: 'marc@gmail.com',priceChangePct: .25},
      {name: 'Nick', email: 'nick@gmail.com',priceChangePct: .35},
      {name: 'Andy', email: 'andy@gmail.com',priceChangePct: .45}
    ];
    grid.setStore({ xtype: 'store', data: data});




    // var gridcolumnProps = {
    //   xtype: 'gridcolumn'
    // };
    // var gridcolumn = Ext.create(gridcolumnProps);
    // gridcolumn.name = 'name';


    panel.add(grid);
    //grid.add(gridcolumn);
  }, 0);

})

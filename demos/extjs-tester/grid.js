function grid() {

  var data = [
    { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
  ]

  var store = {
    autoLoad: true,
    fields: ['name', 'email', 'phone'],
    data: [
      { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
      { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
      { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
      { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    ]
  }
  var o = {
    xtype: 'grid',
    data: data,
    title: 'the title'
  }
  var grid = Ext.create(o)



  //lockedgrid.setColumns([column01,column02,column03,column04,column05,column06,column07])

  var panel = Ext.create({xtype:'panel', title:'grid', layout:'fit'})
  Ext.Viewport.add([panel])
  panel.add(grid)

  var column01 = Ext.create({xtype: 'column', text: 'Name', dataIndex: 'name'})
  var column02 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 60})
  var column03 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 60})
  var column04 = Ext.create({xtype: 'column', text: 'Name', dataIndex: 'name', width: 60})
  var column05 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 160})
  var column06 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 160})
  var column07 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 160})

  grid.addColumn(column01)
  grid.addColumn(column02)
  grid.addColumn(column03)
  grid.addColumn(column04)
  grid.addColumn(column05)
  grid.addColumn(column06)
  grid.addColumn(column07)


}
function grid() {

  var data = [
    { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
  ]

  var oRoot = {
    xtype: 'container',
    title: 'root',
    height: '100%',
    width: '100%',
    layout: 'fit',
    padding: '10'
  }
  var container = Ext.create(oRoot)

  var o = {
    xtype: 'grid',
    title: 'the title',
    height: '100%',
    width: '100%'
  }
  var grid = Ext.create(o)
  grid.setData(data)

  Ext.Viewport.add([container])
  container.add(grid)

  var column01 = Ext.create({xtype: 'column', text: 'Name', dataIndex: 'name'})
  var column02 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 60})
  var column03 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 60})
  var column04 = Ext.create({xtype: 'column', text: 'Name', dataIndex: 'name', width: 60})
  var column05 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 160})
  var column06 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 160})
  var column07 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 160})

  grid.insertColumn(0,column01)
  grid.insertColumn(1,column02)
  grid.insertColumn(2,column03)
  grid.insertColumn(3,column04)
  grid.insertColumn(4,column05)
  grid.insertColumn(5,column06)
  grid.insertColumn(6,column07)

}
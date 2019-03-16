function grid() {

  var data = [
    { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
  ]

  var oRoot = {
    xtype: 'container',
    layout: 'fit'
  }
  var container = Ext.create(oRoot)

  var o = {
    xtype: 'grid',
    title: 'the grid title'
  }
  var grid = Ext.create(o)
  grid.setData(data)

  Ext.Viewport.add([container])
  container.add(grid)

  var column01 = Ext.create({xtype: 'column', text: 'Name', dataIndex: 'name', width: 200})
  var column02 = Ext.create({xtype: 'column', text: 'Email', dataIndex: 'email', width: 200})
  var column03 = Ext.create({xtype: 'column', text: 'Phone', dataIndex: 'phone', width: 200})

  grid.insertColumn(0,column01)
  grid.insertColumn(1,column02)
  grid.insertColumn(2,column03)


}
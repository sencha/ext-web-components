const Parser = require('./parser');
var parser = new Parser()

var file = `Ext.define('myApp.view.PanelView',{
    a: true,
    b: 'initial',
        extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    title: 'the grid title from hard code',
    requires: [],
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    columns: [
        { 
            text: 'Name',
            dataIndex: 'name',
            width: 100,
            cell: {userCls: 'bold'}
        },
        {text: 'Email',dataIndex: 'email',width: 230},
        {
            text: 'Phone',
            dataIndex: 'phone',
            width: 150 
        }
    ],
    listeners: {
        //activate: {fn: 'onItemSelected', single: true},
        select: 'onItemSelected'
    }
});`

parser.parseIt(file)
console.log(parser.className)

setTimeout(function(){
    console.log(parser.getProperty('b'))
    console.log(parser.getProperty('columns'))
    console.log(parser.getProperty('fake'))

    console.log(parser.setProperty('b','changed'))
    console.log(parser.setProperty('columns','changed'))
    console.log(parser.setProperty('fake','changed'))

    parser.addProperty('mjg3', 'newvalue')

    const code = parser.generateCode()
    console.log(code)

}, 1000);

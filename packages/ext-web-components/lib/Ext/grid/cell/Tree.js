import Ext_grid_cell_Cell_Component from '../../../Ext/grid/cell/Cell';

export default class Ext_grid_cell_Tree_Component extends Ext_grid_cell_Cell_Component {
//events
get onbeforecheckchange(){return this.getAttribute('onbeforecheckchange')};set onbeforecheckchange(onbeforecheckchange){this.setAttribute('onbeforecheckchange',onbeforecheckchange)}
get oncheckchange(){return this.getAttribute('oncheckchange')};set oncheckchange(oncheckchange){this.setAttribute('oncheckchange',oncheckchange)}
//configs

static XTYPE() {return 'treecell'}
static PROPERTIESOBJECT() { return {
"autoCheckChildren":["boolean"],
"checkable":["boolean"],
"checkableField":["string"],
"checkedField":["string"],
"checkOnTriTap":["boolean"],
"enableTri":["boolean"],
"iconCls":["string"],
"iconClsProperty":["string"],
"text":["string"],
"toolDefaults":["object"],
}}
static EVENTS() { return [
{name:'beforecheckchange',parameters:'undefined,checked,current,record,e'},
{name:'checkchange',parameters:'undefined,checked,record,e'},
]}
static METHODS() { return [
{ name:'collapse',function: function() { return this.ext.collapse() } },
{ name:'doNodeUpdate',function: function(record) { return this.ext.doNodeUpdate(record) } },
{ name:'expand',function: function() { return this.ext.expand() } },
{ name:'maybeToggle',function: function(e) { return this.ext.maybeToggle(e) } },
{ name:'toggle',function: function() { return this.ext.toggle() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_cell_Tree_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_cell_Tree_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_grid_cell_Tree_Component.METHODS(),
            Ext_grid_cell_Tree_Component.XTYPE(),
            Ext_grid_cell_Tree_Component.PROPERTIESOBJECT(),
            Ext_grid_cell_Tree_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_cell_Tree_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_cell_Tree_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_cell_Tree_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_cell_Tree_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

import Ext_Widget_Component from '../../../Ext/Widget';

export default class Ext_grid_cell_Base_Component extends Ext_Widget_Component {
//events
//configs

static XTYPE() {return 'gridcellbase'}
static PROPERTIESOBJECT() { return {
"align":["'left'","'center'","'right'"],
"bodyCls":["string"],
"bodyStyle":["string","object"],
"cellCls":["string"],
"cls":["string"],
"column":["Ext.grid.column.Column"],
"hidden":["boolean"],
"record":["Ext.data.Model"],
"selectable":["boolean"],
"value":["mixed"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'bound',function: function(fields) { return this.ext.bound(fields) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_cell_Base_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_cell_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_grid_cell_Base_Component.METHODS(),
            Ext_grid_cell_Base_Component.XTYPE(),
            Ext_grid_cell_Base_Component.PROPERTIESOBJECT(),
            Ext_grid_cell_Base_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_cell_Base_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_cell_Base_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_cell_Base_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_cell_Base_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

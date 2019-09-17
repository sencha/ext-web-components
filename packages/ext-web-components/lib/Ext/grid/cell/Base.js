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

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_cell_Base_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_cell_Base_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_cell_Base_Component.METHODS()),
            events.concat(Ext_grid_cell_Base_Component.EVENTS())



            //events.concat(Ext_grid_cell_Base_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_cell_Base_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_cell_Base_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_cell_Base_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_cell_Base_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_cell_Base_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_cell_Base_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_cell_Base_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_cell_Base_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_cell_Base_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

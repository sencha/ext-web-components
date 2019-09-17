import Ext_grid_cell_Base_Component from '../../../Ext/grid/cell/Base';

export default class Ext_grid_cell_Check_Component extends Ext_grid_cell_Base_Component {
//events
//configs

static XTYPE() {return 'checkcell'}
static PROPERTIESOBJECT() { return {
"disabled":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'disable',function: function() { return this.ext.disable() } },
{ name:'enable',function: function() { return this.ext.enable() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_cell_Check_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_cell_Check_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_cell_Check_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_cell_Check_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_cell_Check_Component.METHODS()),
            events.concat(Ext_grid_cell_Check_Component.EVENTS())



            //events.concat(Ext_grid_cell_Check_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_cell_Check_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_cell_Check_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_cell_Check_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_cell_Check_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_cell_Check_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_cell_Check_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_cell_Check_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_cell_Check_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_cell_Check_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

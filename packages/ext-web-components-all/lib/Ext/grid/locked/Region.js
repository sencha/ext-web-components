import Ext_Panel_Component from '../../../Ext/Panel';

export default class Ext_grid_locked_Region_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'lockedgridregion'}
static PROPERTIESOBJECT() { return {
"grid":["Ext.grid.Grid"],
"locked":["boolean","string"],
"menuItem":["string"],
"regionKey":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_locked_Region_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_locked_Region_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_grid_locked_Region_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_locked_Region_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_grid_locked_Region_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_grid_locked_Region_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

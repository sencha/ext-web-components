import Ext_Panel_Component from '../../../Ext/Panel';

export default class Ext_grid_locked_Grid_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'lockedgrid'}
static PROPERTIESOBJECT() { return {
"columnMenu":["object"],
"columns":["Ext.grid.column.Column[]"],
"defaultLockedRegion":["string"],
"enableColumnMove":["boolean"],
"gridDefaults":["object"],
"grouped":["boolean"],
"hideHeaders":["boolean"],
"itemConfig":["object"],
"leftGridDefaults":["object"],
"regions":["object"],
"rightGridDefaults":["object"],
"store":["Ext.data.Store","object","string"],
"variableHeights":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_locked_Grid_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_locked_Grid_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_grid_locked_Grid_Component.METHODS(),
            Ext_grid_locked_Grid_Component.XTYPE(),
            Ext_grid_locked_Grid_Component.PROPERTIESOBJECT(),
            Ext_grid_locked_Grid_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_locked_Grid_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_locked_Grid_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_locked_Grid_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_locked_Grid_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

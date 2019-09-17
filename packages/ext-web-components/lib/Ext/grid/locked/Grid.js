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

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_locked_Grid_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_locked_Grid_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_locked_Grid_Component.METHODS()),
            events.concat(Ext_grid_locked_Grid_Component.EVENTS())



            //events.concat(Ext_grid_locked_Grid_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_locked_Grid_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_locked_Grid_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_locked_Grid_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_locked_Grid_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_locked_Grid_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_locked_Grid_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_locked_Grid_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_locked_Grid_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_locked_Grid_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

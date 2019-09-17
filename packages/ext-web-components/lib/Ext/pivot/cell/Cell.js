import Ext_grid_cell_Cell_Component from '../../../Ext/grid/cell/Cell';

export default class Ext_pivot_cell_Cell_Component extends Ext_grid_cell_Cell_Component {
//events
//configs

static XTYPE() {return 'pivotgridcell'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_pivot_cell_Cell_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_pivot_cell_Cell_Component.METHODS()),
            events.concat(Ext_pivot_cell_Cell_Component.EVENTS())



            //events.concat(Ext_pivot_cell_Cell_Component.EVENTS()),
            //propertiesobject.concat(Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_pivot_cell_Cell_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_pivot_cell_Cell_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_pivot_cell_Cell_Component.METHODS())
        )
        //this.XTYPE = Ext_pivot_cell_Cell_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_pivot_cell_Cell_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_pivot_cell_Cell_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

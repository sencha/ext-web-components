import Ext_grid_Row_Component from '../../Ext/grid/Row';

export default class Ext_pivot_Row_Component extends Ext_grid_Row_Component {
//events
//configs

static XTYPE() {return 'pivotgridrow'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_pivot_Row_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_pivot_Row_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_pivot_Row_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_Row_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_pivot_Row_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_pivot_Row_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
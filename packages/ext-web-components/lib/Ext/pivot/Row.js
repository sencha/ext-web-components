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
            Ext_pivot_Row_Component.METHODS(),
            Ext_pivot_Row_Component.XTYPE(),
            Ext_pivot_Row_Component.PROPERTIESOBJECT(),
            Ext_pivot_Row_Component.EVENTS()
        )
        this.XTYPE = Ext_pivot_Row_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_Row_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_pivot_Row_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_pivot_Row_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

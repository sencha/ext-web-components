import Ext_grid_column_Check_Component from '../../../Ext/grid/column/Check';

export default class Ext_grid_column_Selection_Component extends Ext_grid_column_Check_Component {
//events
//configs

static XTYPE() {return 'selectioncolumn'}
static PROPERTIESOBJECT() { return {
"stopSelection":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_column_Selection_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_column_Selection_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_grid_column_Selection_Component.METHODS(),
            Ext_grid_column_Selection_Component.XTYPE(),
            Ext_grid_column_Selection_Component.PROPERTIESOBJECT(),
            Ext_grid_column_Selection_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_column_Selection_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_Selection_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_column_Selection_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_column_Selection_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

import Ext_menu_CheckItem_Component from '../../../../Ext/menu/CheckItem';

export default class Ext_grid_filters_menu_Base_Component extends Ext_menu_CheckItem_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"text":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_filters_menu_Base_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_filters_menu_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_grid_filters_menu_Base_Component.METHODS(),
            Ext_grid_filters_menu_Base_Component.XTYPE(),
            Ext_grid_filters_menu_Base_Component.PROPERTIESOBJECT(),
            Ext_grid_filters_menu_Base_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_filters_menu_Base_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_filters_menu_Base_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_filters_menu_Base_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_filters_menu_Base_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

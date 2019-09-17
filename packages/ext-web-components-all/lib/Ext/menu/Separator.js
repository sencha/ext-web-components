import Ext_Component_Component from '../../Ext/Component';

export default class Ext_menu_Separator_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'menuseparator'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_menu_Separator_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_menu_Separator_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_menu_Separator_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_menu_Separator_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_menu_Separator_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_menu_Separator_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

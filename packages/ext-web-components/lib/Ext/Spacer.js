import Ext_Component_Component from '../Ext/Component';

export default class Ext_Spacer_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'spacer'}
static PROPERTIESOBJECT() { return {
"flex":["number"],
"width":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'constructor',function: function(config) { return this.ext.constructor(config) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Spacer_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Spacer_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Spacer_Component.METHODS(),
            Ext_Spacer_Component.XTYPE(),
            Ext_Spacer_Component.PROPERTIESOBJECT(),
            Ext_Spacer_Component.EVENTS()
        )
        this.XTYPE = Ext_Spacer_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Spacer_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Spacer_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Spacer_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

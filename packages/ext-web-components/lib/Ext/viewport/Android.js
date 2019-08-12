import Ext_viewport_Default_Component from '../../Ext/viewport/Default';

export default class Ext_viewport_Android_Component extends Ext_viewport_Default_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_viewport_Android_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_viewport_Android_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_viewport_Android_Component.METHODS(),
            Ext_viewport_Android_Component.XTYPE(),
            Ext_viewport_Android_Component.PROPERTIESOBJECT(),
            Ext_viewport_Android_Component.EVENTS()
        )
        this.XTYPE = Ext_viewport_Android_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_viewport_Android_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_viewport_Android_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_viewport_Android_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

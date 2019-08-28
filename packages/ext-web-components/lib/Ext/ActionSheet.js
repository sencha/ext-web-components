import Ext_Sheet_Component from '../Ext/Sheet';

export default class Ext_ActionSheet_Component extends Ext_Sheet_Component {
//events
//configs

static XTYPE() {return 'actionsheet'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_ActionSheet_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_ActionSheet_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_ActionSheet_Component.METHODS(),
            Ext_ActionSheet_Component.XTYPE(),
            Ext_ActionSheet_Component.PROPERTIESOBJECT(),
            Ext_ActionSheet_Component.EVENTS()
        )
        this.XTYPE = Ext_ActionSheet_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ActionSheet_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_ActionSheet_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_ActionSheet_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

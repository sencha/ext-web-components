import Ext_Decorator_Component from '../../Ext/Decorator';

export default class Ext_carousel_Item_Component extends Ext_Decorator_Component {
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
        for (var property in Ext_carousel_Item_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_carousel_Item_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_carousel_Item_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_carousel_Item_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_carousel_Item_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_carousel_Item_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
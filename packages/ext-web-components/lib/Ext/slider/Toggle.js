import Ext_slider_Slider_Component from '../../Ext/slider/Slider';

export default class Ext_slider_Toggle_Component extends Ext_slider_Slider_Component {
//events
//configs

static XTYPE() {return 'toggleslider'}
static PROPERTIESOBJECT() { return {
"value":["number","number[]"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_slider_Toggle_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_slider_Toggle_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_slider_Toggle_Component.METHODS(),
            Ext_slider_Toggle_Component.XTYPE(),
            Ext_slider_Toggle_Component.PROPERTIESOBJECT(),
            Ext_slider_Toggle_Component.EVENTS()
        )
        this.XTYPE = Ext_slider_Toggle_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_slider_Toggle_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_slider_Toggle_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_slider_Toggle_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

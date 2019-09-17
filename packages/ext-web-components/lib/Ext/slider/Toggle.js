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

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_slider_Toggle_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_slider_Toggle_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_slider_Toggle_Component.METHODS()),
            events.concat(Ext_slider_Toggle_Component.EVENTS())



            //events.concat(Ext_slider_Toggle_Component.EVENTS()),
            //propertiesobject.concat(Ext_slider_Toggle_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_slider_Toggle_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_slider_Toggle_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_slider_Toggle_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_slider_Toggle_Component.METHODS())
        )
        //this.XTYPE = Ext_slider_Toggle_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_slider_Toggle_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_slider_Toggle_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_slider_Toggle_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

import Ext_carousel_Carousel_Component from '../../Ext/carousel/Carousel';

export default class Ext_carousel_Infinite_Component extends Ext_carousel_Carousel_Component {
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
        for (var property in Ext_carousel_Infinite_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_carousel_Infinite_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_carousel_Infinite_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_carousel_Infinite_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_carousel_Infinite_Component.METHODS()),
            events.concat(Ext_carousel_Infinite_Component.EVENTS())



            //events.concat(Ext_carousel_Infinite_Component.EVENTS()),
            //propertiesobject.concat(Ext_carousel_Infinite_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_carousel_Infinite_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_carousel_Infinite_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_carousel_Infinite_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_carousel_Infinite_Component.METHODS())
        )
        //this.XTYPE = Ext_carousel_Infinite_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_carousel_Infinite_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_carousel_Infinite_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_carousel_Infinite_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

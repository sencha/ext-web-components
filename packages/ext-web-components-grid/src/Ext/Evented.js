import Ext_Base from '../Ext/Base.js';

export default class Ext_Evented extends Ext_Base {

    static PROPERTIES() { return [
'listeners',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_Evented.PROPERTIES());
        return Ext_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_Evented.EVENTS());
        return Ext_Base.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return ''}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_Evented.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_Evented.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_Evented.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_Evented.PROPERTIES()),
            events.concat(Ext_Evented.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

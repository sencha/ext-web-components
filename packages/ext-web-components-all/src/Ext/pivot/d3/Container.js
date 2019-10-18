import Ext_pivot_d3_AbstractContainer from '../../../Ext/pivot/d3/AbstractContainer.js';

export default class Ext_pivot_d3_Container extends Ext_pivot_d3_AbstractContainer {

    static PROPERTIES() { return [
'configurator',
'drawing',
'matrix',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_pivot_d3_Container.PROPERTIES());
        return Ext_pivot_d3_AbstractContainer.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_pivot_d3_Container.EVENTS());
        return Ext_pivot_d3_AbstractContainer.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'pivotd3container'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_pivot_d3_Container.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_pivot_d3_Container.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_pivot_d3_Container.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_pivot_d3_Container.PROPERTIES()),
            events.concat(Ext_pivot_d3_Container.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

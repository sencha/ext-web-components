import Ext_panel_Panel from '../../../Ext/panel/Panel.js';

export default class Ext_pivot_d3_AbstractContainer extends Ext_panel_Panel {

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
        properties = properties.concat(Ext_pivot_d3_AbstractContainer.PROPERTIES());
        return Ext_panel_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_pivot_d3_AbstractContainer.EVENTS());
        return Ext_panel_Panel.getEvents(events);
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
        //for (var property in Ext_pivot_d3_AbstractContainer.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_pivot_d3_AbstractContainer.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_pivot_d3_AbstractContainer.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_pivot_d3_AbstractContainer.PROPERTIES()),
            events.concat(Ext_pivot_d3_AbstractContainer.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

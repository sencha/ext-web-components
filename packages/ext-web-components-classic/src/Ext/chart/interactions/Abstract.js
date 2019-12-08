import Ext_Base from '../../../Ext/Base.js';

export default class Ext_chart_interactions_Abstract extends Ext_Base {
    static PROPERTIES() {return [
    'chart',
    'enabled',
    'gesture',
    'listeners',
    ]};
    static EVENTS() {return [
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_chart_interactions_Abstract.PROPERTIES());
        return Ext_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_chart_interactions_Abstract.EVENTS());
        return Ext_Base.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'interaction'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_chart_interactions_Abstract.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_chart_interactions_Abstract.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_chart_interactions_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_chart_interactions_Abstract.PROPERTIES()),
            events.concat(Ext_chart_interactions_Abstract.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

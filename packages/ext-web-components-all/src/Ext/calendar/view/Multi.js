import Ext_container_Container from '../../../Ext/container/Container.js';

export default class Ext_calendar_view_Multi extends Ext_container_Container {

    static PROPERTIES() { return [
'compact',
'compactOptions',
'defaultView',
'layout',
'store',
'timezoneOffset',
'value',
'views',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_view_Multi.PROPERTIES());
        return Ext_container_Container.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_view_Multi.EVENTS());
        return Ext_container_Container.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'calendar-multiview'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_calendar_view_Multi.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_calendar_view_Multi.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_calendar_view_Multi.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_calendar_view_Multi.PROPERTIES()),
            events.concat(Ext_calendar_view_Multi.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

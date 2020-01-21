import EleBaseComponent from '../ele-base.js'

export default class Ext_Base extends EleBaseComponent {

    static PROPERTIES() { return [
        'closable',
        'title',
        'header',
        'renderer',
        'label',
        'fitToParent',
        'tab',
        'config',
        'platformConfig',
        'summaryRenderer',
        'extname',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
        
]};
    static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
]};
    static getProperties(properties) {
        return properties.concat(Ext_Base.PROPERTIES)
    }
    static getEvents(events) {
        return events.concat(Ext_Base.EVENTS)
    }

    static get observedAttributes() {
        var attrs = []
        //for (var property in Ext_Base.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        //Ext_Base.EVENTS().forEach(function (eventparameter, index, array) {
        //    attrs.push('on' + eventparameter.name)
        //})

        Ext_Base.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_Base.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        //attrs.push('onready')
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_Base.PROPERTIES()),
            events.concat(Ext_Base.EVENTS())
        )
    }
}
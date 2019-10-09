import EwcBaseComponent from '../ewc-base'

export default class Ext_Base extends EwcBaseComponent {



//events
//get onready(){return this.getAttribute('onready')};set onready(onready){this.setAttribute('onready',onready)}

    static PROPERTIES() { return [
        'eng',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
        
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'ready',parameters:''}
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
        attrs.push('onready')
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_Base.PROPERTIES()),
            events.concat(Ext_Base.EVENTS())
        )
    }
}
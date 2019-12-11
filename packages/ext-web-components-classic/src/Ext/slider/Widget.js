import Ext_Widget from '../../Ext/Widget.js';

export default class Ext_slider_Widget extends Ext_Widget {
    static PROPERTIES() {return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'clickToChange',
    'cls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'maxValue',
    'minValue',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'publishOnComplete',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'style',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'vertical',
    'viewModel',
    'width',
    ]};
    static EVENTS() {return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_slider_Widget.PROPERTIES());
        return Ext_Widget.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_slider_Widget.EVENTS());
        return Ext_Widget.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return ''}
//static PROPERTIESOBJECT() { return {
//}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_slider_Widget.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_slider_Widget.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_slider_Widget.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_slider_Widget.PROPERTIES()),
            events.concat(Ext_slider_Widget.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

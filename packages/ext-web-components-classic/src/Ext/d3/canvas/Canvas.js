import Ext_d3_Component from '../../../Ext/d3/Component.js';

export default class Ext_d3_canvas_Canvas extends Ext_d3_Component {
    static PROPERTIES() {return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'componentCls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'focusCls',
    'hdpi',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'interactions',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'size',
    'store',
    'style',
    'touchAction',
    'transitions',
    'twoWayBindable',
    'ui',
    'userCls',
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
    {name:'sceneresize', parameters:'component,canvas,size'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_d3_canvas_Canvas.PROPERTIES());
        return Ext_d3_Component.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_d3_canvas_Canvas.EVENTS());
        return Ext_d3_Component.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'd3-canvas'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_d3_canvas_Canvas.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_d3_canvas_Canvas.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_d3_canvas_Canvas.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_d3_canvas_Canvas.PROPERTIES()),
            events.concat(Ext_d3_canvas_Canvas.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

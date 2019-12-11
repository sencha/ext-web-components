import Ext_sparkline_BarBase from '../../Ext/sparkline/BarBase.js';

export default class Ext_sparkline_Bar extends Ext_sparkline_BarBase {
    static PROPERTIES() {return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'barColor',
    'barSpacing',
    'barWidth',
    'bind',
    'border',
    'chartRangeClip',
    'chartRangeMax',
    'chartRangeMin',
    'cls',
    'colorMap',
    'controller',
    'defaultListenerScope',
    'disabled',
    'disableTooltips',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'highlightColor',
    'highlightLighten',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lineColor',
    'listeners',
    'margin',
    'name',
    'nameable',
    'negBarColor',
    'nullColor',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'stackedBarColor',
    'style',
    'tipTpl',
    'tooltipPrefix',
    'tooltipSkipNull',
    'tooltipSuffix',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'values',
    'viewModel',
    'width',
    'zeroAxis',
    'zeroColor',
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
        properties = properties.concat(Ext_sparkline_Bar.PROPERTIES());
        return Ext_sparkline_BarBase.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_sparkline_Bar.EVENTS());
        return Ext_sparkline_BarBase.getEvents(events);
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
        //for (var property in Ext_sparkline_Bar.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_sparkline_Bar.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_sparkline_Bar.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_sparkline_Bar.PROPERTIES()),
            events.concat(Ext_sparkline_Bar.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

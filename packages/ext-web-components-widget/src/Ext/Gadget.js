import Ext_Evented from '../Ext/Evented';

export default class Ext_Gadget extends Ext_Evented {

    static PROPERTIES() { return [
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'bind',
'border',
'cls',
'constrainAlign',
'controller',
'defaultListenerScope',
'disabled',
'flex',
'floated',
'focusCls',
'height',
'hidden',
'hideMode',
'id',
'instanceCls',
'itemId',
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
'relative',
'renderTo',
'ripple',
'session',
'shadow',
'shareableName',
'shim',
'style',
'toFrontOnShow',
'touchAction',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'viewModel',
'width',
'x',
'y',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'widget'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'widget,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'widget,event'},
{name:'focusenter',parameters:'widget,event'},
{name:'focusleave',parameters:'widget,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'widget'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_Gadget.PROPERTIES());
        return Ext_Evented.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_Gadget.EVENTS());
        return Ext_Evented.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'widget'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_Gadget.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_Gadget.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_Gadget.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_Gadget.PROPERTIES()),
            events.concat(Ext_Gadget.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

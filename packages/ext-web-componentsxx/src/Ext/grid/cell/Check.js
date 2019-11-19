import Ext_grid_cell_Base from '../../../Ext/grid/cell/Base';

export default class Ext_grid_cell_Check extends Ext_grid_cell_Base {

    static PROPERTIES() { return [
'align',
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'bind',
'bodyCls',
'bodyStyle',
'border',
'cellCls',
'cls',
'column',
'constrainAlign',
'controller',
'defaultListenerScope',
'defaultToolWeights',
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
'record',
'reference',
'relative',
'renderTo',
'ripple',
'selectable',
'session',
'shadow',
'shareableName',
'shim',
'style',
'toFrontOnShow',
'toolDefaults',
'tools',
'touchAction',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'value',
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
{name:'beforetofront',parameters:'checkcell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'checkcell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'checkcell,event'},
{name:'focusenter',parameters:'checkcell,event'},
{name:'focusleave',parameters:'checkcell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'checkcell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_Check.PROPERTIES());
        return Ext_grid_cell_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Check.EVENTS());
        return Ext_grid_cell_Base.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'checkcell'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_grid_cell_Check.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_grid_cell_Check.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_grid_cell_Check.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_grid_cell_Check.PROPERTIES()),
            events.concat(Ext_grid_cell_Check.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

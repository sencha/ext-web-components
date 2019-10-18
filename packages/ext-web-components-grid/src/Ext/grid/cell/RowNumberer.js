import Ext_grid_cell_Number from '../../../Ext/grid/cell/Number.js';

export default class Ext_grid_cell_RowNumberer extends Ext_grid_cell_Number {

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
'encodeHtml',
'flex',
'floated',
'focusCls',
'format',
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
'rawValue',
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
'zeroValue',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'rownumberercell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'rownumberercell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'rownumberercell,event'},
{name:'focusenter',parameters:'rownumberercell,event'},
{name:'focusleave',parameters:'rownumberercell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'rownumberercell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_RowNumberer.PROPERTIES());
        return Ext_grid_cell_Number.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_RowNumberer.EVENTS());
        return Ext_grid_cell_Number.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'rownumberercell'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_grid_cell_RowNumberer.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_grid_cell_RowNumberer.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_grid_cell_RowNumberer.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_grid_cell_RowNumberer.PROPERTIES()),
            events.concat(Ext_grid_cell_RowNumberer.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

import Ext_Widget from '../../../Ext/Widget.js';

export default class Ext_grid_cell_Base extends Ext_Widget {
    static PROPERTIES() {return [
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
    ]};
    static EVENTS() {return [
        {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforetofront', parameters:'sender'},
        {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
        {name:'blur', parameters:'sender,event'},
        {name:'disabledchange', parameters:'sender,value,oldValue'},
        {name:'focus', parameters:'sender,event'},
        {name:'focusenter', parameters:'sender,event'},
        {name:'focusleave', parameters:'sender,event'},
        {name:'heightchange', parameters:'sender,value,oldValue'},
        {name:'hiddenchange', parameters:'sender,value,oldValue'},
        {name:'tofront', parameters:'sender'},
        {name:'widthchange', parameters:'sender,value,oldValue'},
        {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_Base.PROPERTIES());
        return Ext_Widget.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Base.EVENTS());
        return Ext_Widget.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'gridcellbase'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_grid_cell_Base.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_grid_cell_Base.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_grid_cell_Base.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_grid_cell_Base.PROPERTIES()),
            events.concat(Ext_grid_cell_Base.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

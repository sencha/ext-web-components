import Ext_grid_cell_Cell from '../../../Ext/grid/cell/Cell.js';

export default class Ext_grid_cell_Tree extends Ext_grid_cell_Cell {
    static PROPERTIES() {return [
        'align',
        'alignSelf',
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoCheckChildren',
        'bind',
        'bodyCls',
        'bodyStyle',
        'border',
        'cellCls',
        'checkable',
        'checkableField',
        'checkedField',
        'checkOnTriTap',
        'cls',
        'column',
        'constrainAlign',
        'controller',
        'defaultListenerScope',
        'defaultToolWeights',
        'disabled',
        'enableTri',
        'encodeHtml',
        'flex',
        'floated',
        'focusCls',
        'formatter',
        'height',
        'hidden',
        'hideMode',
        'iconCls',
        'iconClsProperty',
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
        'renderer',
        'renderTo',
        'ripple',
        'scope',
        'selectable',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'style',
        'text',
        'toFrontOnShow',
        'toolDefaults',
        'tools',
        'touchAction',
        'tpl',
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
    ]};
    static EVENTS() {return [
        {name:'beforecheckchange', parameters:'sender,checked,current,record,e'},
        {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforetofront', parameters:'sender'},
        {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
        {name:'blur', parameters:'sender,event'},
        {name:'checkchange', parameters:'sender,checked,record,e'},
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
        properties = properties.concat(Ext_grid_cell_Tree.PROPERTIES());
        return Ext_grid_cell_Cell.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Tree.EVENTS());
        return Ext_grid_cell_Cell.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'treecell'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_grid_cell_Tree.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_grid_cell_Tree.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_grid_cell_Tree.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_grid_cell_Tree.PROPERTIES()),
            events.concat(Ext_grid_cell_Tree.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

import Ext_list_AbstractTreeItem from '../../Ext/list/AbstractTreeItem';

export default class Ext_list_TreeItem extends Ext_list_AbstractTreeItem {

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
'expandable',
'expanded',
'flex',
'floated',
'focusCls',
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
'leaf',
'listeners',
'loading',
'margin',
'name',
'nameable',
'node',
'over',
'owner',
'parentItem',
'plugins',
'publishes',
'reference',
'relative',
'renderTo',
'ripple',
'rowCls',
'rowClsProperty',
'selected',
'selectedParent',
'session',
'shadow',
'shareableName',
'shim',
'style',
'text',
'textProperty',
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
{name:'beforetofront',parameters:'treelistitem'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'treelistitem,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'treelistitem,event'},
{name:'focusenter',parameters:'treelistitem,event'},
{name:'focusleave',parameters:'treelistitem,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'treelistitem'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_list_TreeItem.PROPERTIES());
        return Ext_list_AbstractTreeItem.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_list_TreeItem.EVENTS());
        return Ext_list_AbstractTreeItem.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'treelistitem'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_list_TreeItem.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_list_TreeItem.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_list_TreeItem.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_list_TreeItem.PROPERTIES()),
            events.concat(Ext_list_TreeItem.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}

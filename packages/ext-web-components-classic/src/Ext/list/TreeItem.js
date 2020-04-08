import Ext_list_AbstractTreeItem from '../../Ext/list/AbstractTreeItem.js';

export default class Ext_list_TreeItem extends Ext_list_AbstractTreeItem {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'expandable',
    'expanded',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'iconCls',
    'iconClsProperty',
    'instanceCls',
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
    'renderTo',
    'ripple',
    'rowCls',
    'rowClsProperty',
    'selected',
    'selectedParent',
    'session',
    'shareableName',
    'style',
    'text',
    'textProperty',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
  ]};
  static EVENTS() { return [
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
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_list_TreeItem.PROPERTIES());
    return Ext_list_AbstractTreeItem.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_list_TreeItem.EVENTS());
    return Ext_list_AbstractTreeItem.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
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

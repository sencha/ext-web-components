import Ext_Widget from '../../Ext/Widget.js';

export default class Ext_list_AbstractTreeItem extends Ext_Widget {
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
    properties = properties.concat(Ext_list_AbstractTreeItem.PROPERTIES());
    return Ext_Widget.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_list_AbstractTreeItem.EVENTS());
    return Ext_Widget.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_list_AbstractTreeItem.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_list_AbstractTreeItem.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_list_AbstractTreeItem.PROPERTIES()),
      events.concat(Ext_list_AbstractTreeItem.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

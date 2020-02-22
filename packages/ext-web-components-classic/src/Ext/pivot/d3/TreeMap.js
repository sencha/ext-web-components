import Ext_d3_hierarchy_TreeMap from '../../../Ext/d3/hierarchy/TreeMap.js';

export default class Ext_pivot_d3_TreeMap extends Ext_d3_hierarchy_TreeMap {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoExpand',
    'bind',
    'border',
    'busyLayoutText',
    'clipScene',
    'cls',
    'colorAxis',
    'componentCls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'expandEventName',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'hierarchyCls',
    'instanceCls',
    'interactions',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'leafTile',
    'linkKey',
    'listeners',
    'margin',
    'matrix',
    'name',
    'nameable',
    'nodeChildren',
    'nodeClass',
    'nodeKey',
    'nodeText',
    'nodeTransform',
    'nodeValue',
    'noParentValue',
    'noSizeLayout',
    'padding',
    'parentTile',
    'plugins',
    'publishes',
    'reference',
    'renderLinks',
    'renderTo',
    'ripple',
    'rootVisible',
    'scaleLabels',
    'selectEventName',
    'selection',
    'session',
    'shareableName',
    'size',
    'sorter',
    'store',
    'style',
    'tiling',
    'tooltip',
    'touchAction',
    'transitions',
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
    {name:'layout', parameters:'component'},
    {name:'sceneresize', parameters:'component,scene,size'},
    {name:'scenesetup', parameters:'component,scene'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_d3_TreeMap.PROPERTIES());
    return Ext_d3_hierarchy_TreeMap.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_d3_TreeMap.EVENTS());
    return Ext_d3_hierarchy_TreeMap.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_d3_TreeMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_d3_TreeMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_d3_TreeMap.PROPERTIES()),
      events.concat(Ext_pivot_d3_TreeMap.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

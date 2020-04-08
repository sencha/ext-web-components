import Ext_grid_cell_Cell from '../../../Ext/grid/cell/Cell.js';

export default class Ext_pivot_cell_Cell extends Ext_grid_cell_Cell {
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
    'formatter',
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
  static EVENTS() { return [
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
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_cell_Cell.PROPERTIES());
    return Ext_grid_cell_Cell.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_cell_Cell.EVENTS());
    return Ext_grid_cell_Cell.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_cell_Cell.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_cell_Cell.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_cell_Cell.PROPERTIES()),
      events.concat(Ext_pivot_cell_Cell.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

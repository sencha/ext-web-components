import Ext_Base from '../../../Ext/Base.js';

export default class Ext_grid_locking_Lockable extends Ext_Base {
  static PROPERTIES() { return [
    'layout',
    'lockedGridConfig',
    'lockedViewConfig',
    'lockText',
    'normalGridConfig',
    'normalViewConfig',
    'split',
    'stateEvents',
    'subGridXType',
    'syncRowHeight',
    'unlockText',
  ]};
  static EVENTS() { return [
    {name:'beforeload', parameters:'store,operation'},
    {name:'filterchange', parameters:'store,filters'},
    {name:'groupchange', parameters:'store,grouper'},
    {name:'load', parameters:'sender,records,successful,operation'},
    {name:'lockcolumn', parameters:'sender,column'},
    {name:'processcolumns', parameters:'lockedColumns,normalColumns'},
    {name:'unlockcolumn', parameters:'sender,column'},
    {name:'viewready', parameters:'sender'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_locking_Lockable.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_locking_Lockable.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_locking_Lockable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_locking_Lockable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_locking_Lockable.PROPERTIES()),
      events.concat(Ext_grid_locking_Lockable.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

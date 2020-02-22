import Ext_Base from '../../../Ext/Base.js';

export default class Ext_grid_locking_View extends Ext_Base {
  static PROPERTIES() { return [
    'focusCls',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'blur', parameters:'sender,event'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_locking_View.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_locking_View.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_locking_View.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_locking_View.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_locking_View.PROPERTIES()),
      events.concat(Ext_grid_locking_View.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

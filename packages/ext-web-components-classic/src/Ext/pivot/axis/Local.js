import Ext_pivot_axis_Base from '../../../Ext/pivot/axis/Base.js';

export default class Ext_pivot_axis_Local extends Ext_pivot_axis_Base {
  static PROPERTIES() { return [
    'dimensions',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_axis_Local.PROPERTIES());
    return Ext_pivot_axis_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_axis_Local.EVENTS());
    return Ext_pivot_axis_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_axis_Local.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_axis_Local.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_axis_Local.PROPERTIES()),
      events.concat(Ext_pivot_axis_Local.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

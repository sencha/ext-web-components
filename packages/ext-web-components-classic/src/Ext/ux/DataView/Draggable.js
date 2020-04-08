import Ext_Base from '../../../Ext/Base.js';

export default class Ext_ux_DataView_Draggable extends Ext_Base {
  static PROPERTIES() { return [
    'ddConfig',
    'ghostCls',
    'ghostConfig',
    'ghostTpl',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_DataView_Draggable.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_DataView_Draggable.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_DataView_Draggable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_DataView_Draggable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_DataView_Draggable.PROPERTIES()),
      events.concat(Ext_ux_DataView_Draggable.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

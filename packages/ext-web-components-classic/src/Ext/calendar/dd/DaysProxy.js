import Ext_drag_proxy_Placeholder from '../../../Ext/drag/proxy/Placeholder.js';

export default class Ext_calendar_dd_DaysProxy extends Ext_drag_proxy_Placeholder {
  static PROPERTIES() { return [
    'cls',
    'cursorOffset',
    'html',
    'invalidCls',
    'validCls',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_dd_DaysProxy.PROPERTIES());
    return Ext_drag_proxy_Placeholder.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_dd_DaysProxy.EVENTS());
    return Ext_drag_proxy_Placeholder.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_dd_DaysProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_dd_DaysProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_dd_DaysProxy.PROPERTIES()),
      events.concat(Ext_calendar_dd_DaysProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

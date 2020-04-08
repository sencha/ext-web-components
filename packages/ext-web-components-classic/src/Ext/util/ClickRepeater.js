import Ext_Base from '../../Ext/Base.js';

export default class Ext_util_ClickRepeater extends Ext_Base {
  static PROPERTIES() { return [
    'accelerate',
    'delay',
    'el',
    'el',
    'handler',
    'interval',
    'listeners',
    'pressedCls',
    'preventDefault',
    'scope',
    'stopDefault',
    'target',
  ]};
  static EVENTS() { return [
    {name:'click', parameters:'sender,e'},
    {name:'mousedown', parameters:'sender,e'},
    {name:'mouseup', parameters:'sender,e'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_ClickRepeater.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_ClickRepeater.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_ClickRepeater.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_ClickRepeater.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_ClickRepeater.PROPERTIES()),
      events.concat(Ext_util_ClickRepeater.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

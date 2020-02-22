import Ext_Base from '../Ext/Base.js';

export default class Ext_ElementLoader extends Ext_Base {
  static PROPERTIES() { return [
    'ajaxOptions',
    'autoLoad',
    'baseParams',
    'callback',
    'failure',
    'listeners',
    'loadMask',
    'params',
    'renderer',
    'rendererScope',
    'scope',
    'scripts',
    'success',
    'target',
    'url',
  ]};
  static EVENTS() { return [
    {name:'beforeload', parameters:'sender,options'},
    {name:'exception', parameters:'sender,response,options'},
    {name:'load', parameters:'sender,response,options'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ElementLoader.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ElementLoader.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ElementLoader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ElementLoader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ElementLoader.PROPERTIES()),
      events.concat(Ext_ElementLoader.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

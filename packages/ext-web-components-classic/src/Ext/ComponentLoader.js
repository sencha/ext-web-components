import Ext_ElementLoader from '../Ext/ElementLoader.js';

export default class Ext_ComponentLoader extends Ext_ElementLoader {
  static PROPERTIES() { return [
    'ajaxOptions',
    'autoLoad',
    'baseParams',
    'callback',
    'failure',
    'listeners',
    'loadMask',
    'loadOnRender',
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
    properties = properties.concat(Ext_ComponentLoader.PROPERTIES());
    return Ext_ElementLoader.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ComponentLoader.EVENTS());
    return Ext_ElementLoader.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ComponentLoader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ComponentLoader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ComponentLoader.PROPERTIES()),
      events.concat(Ext_ComponentLoader.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

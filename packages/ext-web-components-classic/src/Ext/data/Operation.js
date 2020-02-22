import Ext_Base from '../../Ext/Base.js';

export default class Ext_data_Operation extends Ext_Base {
  static PROPERTIES() { return [
    'batch',
    'callback',
    'id',
    'internalCallback',
    'internalScope',
    'params',
    'proxy',
    'recordCreator',
    'records',
    'request',
    'response',
    'resultSet',
    'scope',
    'synchronous',
    'url',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_Operation.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_Operation.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_Operation.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_Operation.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_Operation.PROPERTIES()),
      events.concat(Ext_data_Operation.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

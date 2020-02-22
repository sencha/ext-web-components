import Ext_data_Connection from '../Ext/data/Connection.js';

export default class Ext_Ajax extends Ext_data_Connection {
  static PROPERTIES() { return [
    'async',
    'autoAbort',
    'binary',
    'cors',
    'defaultHeaders',
    'defaultPostHeader',
    'defaultXhrHeader',
    'disableCaching',
    'disableCachingParam',
    'extraParams',
    'listeners',
    'method',
    'password',
    'timeout',
    'url',
    'useDefaultXhrHeader',
    'username',
    'withCredentials',
  ]};
  static EVENTS() { return [
    {name:'beforerequest', parameters:'conn,options'},
    {name:'requestcomplete', parameters:'conn,response,options'},
    {name:'requestexception', parameters:'conn,response,options'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_Ajax.PROPERTIES());
    return Ext_data_Connection.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_Ajax.EVENTS());
    return Ext_data_Connection.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_Ajax.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_Ajax.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_Ajax.PROPERTIES()),
      events.concat(Ext_Ajax.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

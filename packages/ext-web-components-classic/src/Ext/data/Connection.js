import Ext_Base from '../../Ext/Base.js';

export default class Ext_data_Connection extends Ext_Base {
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
    properties = properties.concat(Ext_data_Connection.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_Connection.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_Connection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_Connection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_Connection.PROPERTIES()),
      events.concat(Ext_data_Connection.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

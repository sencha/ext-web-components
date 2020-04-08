import Ext_util_Observable from '../../Ext/util/Observable.js';

export default class Ext_form_BasicForm extends Ext_util_Observable {
  static PROPERTIES() { return [
    'api',
    'baseParams',
    'errorReader',
    'jsonSubmit',
    'listeners',
    'metadata',
    'method',
    'paramOrder',
    'paramsAsHash',
    'reader',
    'standardSubmit',
    'timeout',
    'trackResetOnLoad',
    'url',
    'waitMsgTarget',
    'waitTitle',
  ]};
  static EVENTS() { return [
    {name:'actioncomplete', parameters:'sender,action'},
    {name:'actionfailed', parameters:'sender,action'},
    {name:'beforeaction', parameters:'sender,action'},
    {name:'dirtychange', parameters:'sender,dirty'},
    {name:'errorchange', parameters:'sender'},
    {name:'validitychange', parameters:'sender,valid'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_BasicForm.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_BasicForm.EVENTS());
    return Ext_util_Observable.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_BasicForm.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_BasicForm.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_BasicForm.PROPERTIES()),
      events.concat(Ext_form_BasicForm.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}

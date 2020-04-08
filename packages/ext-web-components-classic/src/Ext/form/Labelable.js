import Ext_Mixin from '../../Ext/Mixin.js';

export default class Ext_form_Labelable extends Ext_Mixin {
  static PROPERTIES() { return [
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'ariaErrorText',
    'ariaHelp',
    'autoFitErrors',
    'baseBodyCls',
    'beforeBodyEl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldLabel',
    'formItemCls',
    'hideEmptyLabel',
    'hideLabel',
    'invalidCls',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelWidth',
    'msgTarget',
    'preventMark',
  ]};
  static EVENTS() { return [
    {name:'errorchange', parameters:'sender,error'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_Labelable.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_Labelable.EVENTS());
    return Ext_Mixin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_Labelable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_Labelable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_Labelable.PROPERTIES()),
      events.concat(Ext_form_Labelable.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
